import React, { useRef, useCallback } from "react"
import { useSpring, animated, interpolate } from "react-spring"
import { useGesture } from "react-use-gesture"
import tw, { styled } from "twin.macro"

import { useGraphZoomPan } from "./zoom-pan-context"
import LineGraphValues from "./line-graph-values"
import { useDimensions, usePosition } from "../../hooks/layout"

const Overlay = styled.div`
  ${tw`absolute inset-0`}
  ${({ theme }) =>
    (theme === "graph1" &&
      tw`bg-white dark:bg-dark-bg sm:bg-light-grey sm:dark:bg-dark-light-bg`) ||
    (theme === "graph2" &&
      tw`bg-light-grey dark:bg-dark-light-bg sm:bg-white sm:dark:bg-dark-bg`) ||
    tw`bg-white dark:bg-dark-bg`}
`

const Tooltip = styled.div`
  ${tw`text-black dark:text-white whitespace-no-wrap rounded-14 px-3 text-sm leading-lg`}
  ${({ theme }) =>
    (theme === "graph1" &&
      tw`bg-light-grey dark:bg-dark-graph2-dropdown sm:bg-white sm:dark:bg-dark-graph1-dropdown`) ||
    (theme === "graph2" &&
      tw`bg-white dark:bg-dark-graph1-dropdown sm:bg-light-grey sm:dark:bg-dark-graph2-dropdown`) ||
    tw`bg-light-grey dark:bg-dark-light-bg`}
`

const TooltipKeys = styled.div`
  ${tw`text-black dark:text-white whitespace-no-wrap rounded-14 py-2 px-4 text-xxs`}
  ${({ theme }) =>
    (theme === "graph1" &&
      tw`bg-light-grey dark:bg-dark-graph2-dropdown sm:bg-white sm:dark:bg-dark-graph1-dropdown`) ||
    (theme === "graph2" &&
      tw`bg-white dark:bg-dark-graph1-dropdown sm:bg-light-grey sm:dark:bg-dark-graph2-dropdown`) ||
    tw`bg-light-grey dark:bg-dark-light-bg`}
`

function LineGraphMouse({
  renderXValue,
  renderYValue,
  parsedData,
  exact,
  stackedKeys,
  stackColors,
  keyNames,
  renderKeyValue,
  theme = "graph1",
}) {
  const hoverValues = useSpring(() => ({
    dataX: 0,
    dataY: 0,
    xValue: 0,
    opacity: 0,
    tooltipOffset: 0,
  }))

  const {
    dragCallback,
    offsetX,
    period,
    startPeriod,
    highestInView,
  } = useGraphZoomPan()

  const boxRef = useRef()
  const boxRef2 = useRef()
  const tooltipRef = useRef()
  const tooltipKeyRef = useRef()

  const { width: boxWidth, height: boxHeight } = useDimensions(boxRef)
  const { width: tooltipWidth } = useDimensions(tooltipRef)
  const { width: tooltipKeyWidth } = useDimensions(tooltipKeyRef)
  const { left: boxLeft } = usePosition(boxRef)

  const [{ dataX, dataY, xValue, opacity, tooltipOffset }, set] = hoverValues

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

      let tooltipOffset = tooltipWidth / 2 + tooltipKeyWidth / 2 + 8
      if (clientX / boxWidth > 0.5) {
        tooltipOffset = -tooltipOffset
      }

      set({
        xValue: dataPoint.x,
        dataX: (dataPoint.x - offsetX.get()) * (boxWidth / period.animation.to),
        dataY:
          boxHeight - dataPoint.y * (boxHeight / highestInView.animation.to),
        tooltipOffset,
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
      tooltipKeyWidth,
      tooltipWidth,
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
        tw="absolute inset-0 overflow-hidden pointer-events-none z-10"
        style={{ opacity: opacity.interpolate(o => o * 0.5) }}
      >
        <animated.div
          tw="absolute inset-0"
          style={{
            transform: interpolate(
              [dataX, period],
              (dataX, period) =>
                `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(${
                  boxWidth / period / 2
                }px, ${0}px, ${0}px)`
            ),
          }}
        >
          <Overlay theme={theme} />
        </animated.div>

        <animated.div
          tw="absolute inset-0"
          style={{
            transform: interpolate(
              [dataX, period],
              (dataX, period) =>
                `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(${-100}%, ${0}px, ${0}px) translate3d(${
                  -boxWidth / period / 2
                }px, ${0}px, ${0}px)`
            ),
          }}
        >
          <Overlay theme={theme} />
        </animated.div>
      </animated.div>
      <animated.div
        tw="absolute inset-0 pointer-events-none z-20"
        style={{ opacity }}
      >
        <animated.div
          tw="absolute z-20"
          style={{
            transform: interpolate([dataX, dataY], (dataX, dataY) => {
              return `translate3d(${dataX}px, ${
                dataY - 8
              }px, ${0}px) translate3d(-50%, -100%, 0)`
            }),
          }}
          ref={tooltipRef}
        >
          <Tooltip theme={theme}>
            <animated.span>{xValue.interpolate(renderYValue)}</animated.span>
          </Tooltip>
          {stackedKeys && stackedKeys.length ? (
            <animated.div
              tw="absolute rounded top-0"
              style={{
                left: "50%",
                transform: interpolate(
                  [tooltipOffset],
                  tooltipOffset =>
                    `translate3d(-50%, 0px, 0px) translate3d(${tooltipOffset}px, -1rem, 0px)`
                ),
              }}
              ref={tooltipKeyRef}
            >
              <TooltipKeys theme={theme}>
                <LineGraphValues
                  keys={stackedKeys}
                  colors={stackColors}
                  names={keyNames}
                  hoverValues={hoverValues}
                  renderKeyValue={renderKeyValue}
                />
              </TooltipKeys>
            </animated.div>
          ) : null}
        </animated.div>

        <animated.div
          tw="absolute bottom-0 pt-1 sm:pt-4 z-20"
          style={{
            transform: interpolate([dataX], dataX => {
              return `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(-50%, 100%, 0px)`
            }),
          }}
        >
          <Tooltip theme={theme}>
            <animated.span>{xValue.interpolate(renderXValue)}</animated.span>
          </Tooltip>
        </animated.div>
      </animated.div>
    </>
  )
}

export default React.memo(LineGraphMouse)
