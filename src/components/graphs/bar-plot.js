import React from "react"

const BarPlot = ({ parsedData, barPlotKeys, barPlotColors }) => {
  const { exactData, x, y, width } = parsedData

  const containerBarWidth = (0.8 * width) / exactData.length
  const barWidth = containerBarWidth / barPlotKeys.length

  return exactData.map((d, di) => {
    return barPlotKeys.map((barKey, barI) => {
      return (
        <rect
          key={barKey + di}
          x={x(d.x) - containerBarWidth / 2 + barWidth * barI}
          y={0}
          width={barWidth}
          height={y(0) - y(d[barKey])}
          fill={barPlotColors[barI]}
        />
      )
    })
  })
}

export default React.memo(BarPlot)
