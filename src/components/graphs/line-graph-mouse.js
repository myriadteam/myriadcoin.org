import React from "react"
import tw from "twin.macro"
import { useSpring, animated, interpolate } from "react-spring"

import { useGraphZoomPan } from "./zoom-pan-context"

function LineGraphMouse({ renderXValue, renderYValue }) {
  const { dragBind, moveBind } = useGraphZoomPan()

  const [{ dataX, dataY, xValue, yValue }] = useSpring(() => ({
    dataX: 0,
    dataY: 0,
    xValue: 0,
    yValue: 0,
  }))

  return (
    <div tw="absolute inset-0" {...dragBind()}>
      <div tw="absolute inset-0" {...moveBind()} />
      <animated.div
        tw="absolute w-0 border-r border-dashed border-grey pointer-events-none flex items-center justify-center"
        style={{
          top: -10,
          bottom: -64,
          transform: interpolate([dataX], dataX => {
            return `translate3d(${dataX}px, ${0}px, ${0}px) translate3d(-0.5px, 0, 0)`
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
    </div>
  )
}

export default React.memo(LineGraphMouse)
