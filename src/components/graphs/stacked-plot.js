import React, { useState, useRef } from "react"
import { animated, interpolate } from "react-spring"
import { useGraphZoomPan } from "./zoom-pan-context"

const StackedPlot = ({ parsedData, stackColors }) => {
  const { offsetX, period } = useGraphZoomPan()

  const [slice, setSlice] = useState()
  const lastVal = useRef(0)
  const lastPeriod = useRef(0)

  const { stackedData, exactData, width } = parsedData

  const barWidth = (0.8 * width) / exactData.length

  return (
    <animated.g
      data={interpolate([offsetX, period], offsetX => {
        const diff = Math.abs(lastVal.current - offsetX)
        const page = parseInt(period.animation.to * 0.5, 10)
        if (diff > page || lastPeriod.current !== period.animation.to) {
          lastVal.current = parseInt(offsetX, 10)
          lastPeriod.current = period.animation.to

          setSlice({
            start: Math.max(lastVal.current - page, 0),
            end: Math.max(lastVal.current + period.animation.to + page, 0),
          })
        }
      })}
    >
      {stackedData.map((stack, stackI) => (
        <g key={stackI} stroke={stackColors[stackI]} stroke-width={barWidth}>
          {slice !== undefined &&
            stack.slice(slice.start, slice.end).map(d => {
              const [from, to] = d
              const { data } = d

              if (from === to) {
                return null
              }

              return (
                <line key={data.x} x1={data.x} y1={from} x2={data.x} y2={to} />
              )
            })}
        </g>
      ))}
    </animated.g>
  )
}

export default React.memo(StackedPlot)
