import React from "react"

const StackedPlot = ({ parsedData, stackColors }) => {
  const { stackedData, exactData, x, y, width } = parsedData

  const barWidth = (0.8 * width) / exactData.length

  return stackedData.map((stack, stackI) => {
    return stack.map(d => {
      const [from, to] = d
      const { data } = d

      return (
        <rect
          key={data.x}
          x={x(data.x) - barWidth / 2}
          y={from}
          width={barWidth}
          height={y(from) - y(to)}
          fill={stackColors[stackI]}
          opacity={0.8}
        />
      )
    })
  })
}

export default React.memo(StackedPlot)
