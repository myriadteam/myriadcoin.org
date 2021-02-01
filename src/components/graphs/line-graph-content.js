import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

const LineGraphContent = ({ parsedData }) => {
  const { svgLine } = parsedData

  const barWidth = (0.8 * 794) / parsedData.data.length

  return (
    <svg width={"100%"} viewBox="0 0 794 248" tw="overflow-visible">
      <path
        d={svgLine}
        fill="none"
        stroke={"#0066FF"}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      {parsedData.exactData.map((d, i) => (
        <rect
          key={i}
          x={parsedData.x(d.x) - barWidth / 2}
          y={parsedData.y(d.y)}
          width={barWidth}
          height={248 - parsedData.y(d.y)}
          fill="#0066FF"
          opacity={0.8}
        />
      ))}
    </svg>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.shape().isRequired,
}

export default React.memo(LineGraphContent)
