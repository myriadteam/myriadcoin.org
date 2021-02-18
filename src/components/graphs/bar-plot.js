import React, { useState, useRef } from "react"
import { animated, interpolate } from "react-spring"
import { useGraphZoomPan } from "./zoom-pan-context"

const BarPlot = ({ parsedData, barPlotKeys, barPlotColors }) => {
  const { offsetX, period } = useGraphZoomPan()

  const [slice, setSlice] = useState()
  const lastVal = useRef(0)
  const lastPeriod = useRef(0)

  const { exactData, x, y, width } = parsedData

  const containerBarWidth = (0.8 * width) / exactData.length
  const barWidth = containerBarWidth / barPlotKeys.length

  return (
    <animated.g
      data={interpolate([offsetX, period], offsetX => {
        const diff = Math.abs(lastVal.current - offsetX)
        const page = parseInt(period.animation.to * 0.3, 10)
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
      {barPlotKeys.map((barKey, barI) => {
        return (
          <g key={barKey} fill={barPlotColors[barI]}>
            {slice !== undefined &&
              exactData.slice(slice.start, slice.end).map((d, di) => {
                return (
                  <rect
                    key={barKey + (slice.start + di)}
                    x={x(d.x) - containerBarWidth / 2 + barWidth * barI}
                    width={barWidth}
                    height={y(0) - y(d[barKey])}
                  />
                )
              })}
          </g>
        )
      })}
    </animated.g>
  )
}

export default React.memo(BarPlot)
