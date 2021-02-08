import React, { useRef, useCallback } from "react"
import tw from "twin.macro"
import { useSpring, animated, interpolate } from "react-spring"
import { useGesture } from "react-use-gesture"

import { useGraphZoomPan } from "./zoom-pan-context"
import { useDimensions } from "../../hooks/layout"

function LineGraphMouse({ renderXValue, renderYValue, parsedData, exact }) {
  const {
    dragCallback,
    offsetX,
    period,
    startPeriod,
    highestInView,
  } = useGraphZoomPan()

  const boxRef = useRef()

  const { width: boxWidth, height: boxHeight } = useDimensions(boxRef)

  const [{ dataX, dataY, xValue, yValue, opacity }, set] = useSpring(() => ({
    dataX: 0,
    dataY: 0,
    xValue: 0,
    yValue: 0,
    opacity: 0,
  }))

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

  useGesture(
    {
      onDrag: dragCallback,
      onHover: ({ hovering }) => {
        set({ opacity: hovering ? 1 : 0 })
      },
      onMove: ({ xy: [mx] }) => {
        const boxLeft = boxRef.current.offsetParent.offsetLeft
        const hoverX = (mx - boxLeft) / (startPeriod / period.animation.to)
        const itemX = Math.round(
          offsetX.get() + getHoverItemX(hoverX, startPeriod)
        )

        const dataPoint = exact
          ? parsedData.nearestExactDataPointFromX(itemX)
          : parsedData.nearestDataPointFromX(itemX)

        set({
          xValue: dataPoint.x,
          yValue: dataPoint.y,
          dataX:
            (dataPoint.x - offsetX.get()) * (boxWidth / period.animation.to),
          dataY:
            boxHeight - dataPoint.y * (boxHeight / highestInView.animation.to),
        })
      },
    },
    {
      domTarget: boxRef,
      eventOptions: {
        capture: true,
      },
      drag: {
        useTouch: true,
        preventWindowScrollY: true,
        experimental_preventWindowScrollY: true,
      },
      move: {},
    }
  )

  return (
    <>
      <div tw="absolute inset-0" ref={boxRef} />
      <animated.div
        tw="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <animated.div
          tw="absolute w-0 border-r border-dashed border-grey pointer-events-none flex items-center justify-center"
          style={{
            top: -10,
            bottom: -64,
            transform: interpolate([dataX], dataX => {
              return `translate3d(${dataX}px, ${0}px, ${0}px)`
            }),
          }}
        >
          <animated.div tw="absolute bottom-0 whitespace-no-wrap bg-light-grey dark:bg-dark-light-bg rounded text-black dark:text-white px-3 text-sm leading-lg">
            {xValue.interpolate(renderXValue)}
          </animated.div>
        </animated.div>
        <animated.div
          tw="absolute h-4 w-4 bg-blue-graph border-2 border-solid border-white dark:border-dark-bg rounded flex items-center justify-center pointer-events-none"
          style={{
            transform: interpolate([dataX, dataY], (dataX, dataY) => {
              return `translate3d(${dataX}px, ${dataY}px, ${0}px) translate3d(-50%, -50%, 0)`
            }),
          }}
        >
          <div tw="absolute bottom-0 mb-5 bg-blue-graph rounded-14 text-white px-3 text-sm leading-lg whitespace-no-wrap">
            <animated.span>{yValue.interpolate(renderYValue)}</animated.span>
          </div>
        </animated.div>
      </animated.div>
    </>
  )
}

export default React.memo(LineGraphMouse)
