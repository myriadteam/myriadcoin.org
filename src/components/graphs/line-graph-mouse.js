import React, { useRef, useCallback } from "react"
import tw from "twin.macro"
import { animated, interpolate } from "react-spring"
import { useGesture } from "react-use-gesture"

import { useGraphZoomPan } from "./zoom-pan-context"
import { useDimensions, usePosition } from "../../hooks/layout"

function LineGraphMouse({
  renderXValue,
  renderYValue,
  parsedData,
  exact,
  hoverValues,
  overlayStyle,
}) {
  const {
    dragCallback,
    offsetX,
    period,
    startPeriod,
    highestInView,
  } = useGraphZoomPan()

  const boxRef = useRef()
  const boxRef2 = useRef()

  const { width: boxWidth, height: boxHeight } = useDimensions(boxRef)
  const { left: boxLeft } = usePosition(boxRef)

  const [{ dataX, dataY, xValue, opacity }, set] = hoverValues

  const getHoverItemX = useCallback(
    (dragX, period) => {
      if (!boxWidth) {
        return 0
      }

      const pixelToBar = boxWidth / period
      return dragX / pixelToBar
    },
    [boxWidth]
  )

  const hoverCallback = useCallback(
    ({ hovering }) => {
      set({ opacity: hovering ? 1 : 0 })
    },
    [set]
  )

  const moveCallback = useCallback(
    ({ xy: [mx] }) => {
      const clientX = Math.min(Math.max(mx - boxLeft, 0), boxWidth)
      const hoverX = clientX / (startPeriod / period.animation.to)
      const itemX = Math.round(
        offsetX.get() + getHoverItemX(hoverX, startPeriod)
      )

      const dataPoint = exact
        ? parsedData.nearestExactDataPointFromX(itemX)
        : parsedData.nearestDataPointFromX(itemX)

      set({
        xValue: dataPoint.x,
        dataX: (dataPoint.x - offsetX.get()) * (boxWidth / period.animation.to),
        dataY:
          boxHeight - dataPoint.y * (boxHeight / highestInView.animation.to),
      })
    },
    [
      boxHeight,
      boxLeft,
      boxWidth,
      exact,
      getHoverItemX,
      highestInView.animation.to,
      offsetX,
      parsedData,
      period.animation.to,
      set,
      startPeriod,
    ]
  )

  useGesture(
    {
      onDrag: dragCallback,
      onHover: hoverCallback,
      onMove: moveCallback,
    },
    {
      domTarget: boxRef,
      drag: {
        useTouch: true,
        experimental_preventWindowScrollY: true,
      },
    }
  )

  useGesture(
    {
      onHover: hoverCallback,
      onMove: moveCallback,
    },
    {
      domTarget: boxRef2,
      drag: {
        useTouch: true,
        experimental_preventWindowScrollY: true,
      },
    }
  )

  return (
    <>
      <div
        tw="absolute inset-0"
        ref={boxRef}
        style={{ touchAction: "none", userSelect: "none" }}
      />
      <div
        tw="absolute inset-x-0 bottom-0 block sm:hidden"
        ref={boxRef2}
        style={{
          height: "10%",
          touchAction: "none",
          userSelect: "none",
        }}
      />
      <animated.div
        tw="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: opacity.interpolate(o => o * 0.5) }}
      >
        <animated.div
          css={overlayStyle}
          style={{
            transform: interpolate(
              [dataX, period],
              (dataX, period) =>
                `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(${
                  boxWidth / period / 2
                }px, ${0}px, ${0}px)`
            ),
          }}
        />

        <animated.div
          css={overlayStyle}
          style={{
            bottom: 0,
            transform: interpolate(
              [dataX, period],
              (dataX, period) =>
                `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(${-100}%, ${0}px, ${0}px) translate3d(${
                  -boxWidth / period / 2
                }px, ${0}px, ${0}px)`
            ),
          }}
        />
      </animated.div>
      <animated.div
        tw="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <animated.div
          tw="absolute bg-light-grey dark:bg-dark-light-bg rounded-14 text-black dark:text-white px-3 text-sm leading-lg whitespace-no-wrap"
          style={{
            transform: interpolate([dataX, dataY], (dataX, dataY) => {
              return `translate3d(${dataX}px, ${
                dataY - 8
              }px, ${0}px) translate3d(-50%, -100%, 0)`
            }),
          }}
        >
          {xValue.interpolate(renderYValue)}
        </animated.div>

        <animated.div
          tw="absolute bottom-0 pt-3 sm:pt-8"
          style={{
            transform: interpolate([dataX], dataX => {
              return `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(-50%, 100%, 0px)`
            }),
          }}
        >
          <animated.div tw="whitespace-no-wrap bg-light-grey dark:bg-dark-light-bg rounded-14 text-black dark:text-white px-3 text-sm leading-lg">
            {xValue.interpolate(renderXValue)}
          </animated.div>
        </animated.div>
      </animated.div>
    </>
  )
}

export default React.memo(LineGraphMouse)
