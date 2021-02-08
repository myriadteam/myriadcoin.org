import React from "react"

const LinePlot = ({ linePlotData, linePlotColors }) => {
  return linePlotData.map(({ svgLine }, i) => (
    <path
      key={i}
      d={svgLine}
      fill="none"
      stroke={linePlotColors[i]}
      strokeWidth="2"
      vectorEffect="non-scaling-stroke"
    />
  ))
}

export default React.memo(LinePlot)
