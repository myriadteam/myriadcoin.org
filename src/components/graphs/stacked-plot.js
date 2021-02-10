import React from "react"

const StackedPlot = ({ parsedData, stackColors }) => {
  const { stackedData, exactData, width } = parsedData

  const barWidth = (0.8 * width) / exactData.length

  return stackedData.map((stack, stackI) => (
    <g key={stackI} fill={stackColors[stackI]}>
      {stack.slice().map(d => {
        const [from, to] = d
        const { data } = d

        if (from === to) {
          return null
        }

        return (
          <rect
            key={data.x}
            x={data.x - barWidth / 2}
            y={from}
            width={barWidth}
            height={to - from}
          />
        )
      })}
    </g>
  ))
}

export default React.memo(StackedPlot)
