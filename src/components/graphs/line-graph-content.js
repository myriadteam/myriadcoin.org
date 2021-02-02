import React, { useCallback } from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

const LineGraphContent = ({ parsedData, stackColors }) => {
  const renderLinePlot = useCallback(() => {
    const { svgLine } = parsedData

    return (
      <path
        d={svgLine}
        fill="none"
        stroke={"#0066FF"}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    )
  }, [parsedData])

  const renderBarPlot = useCallback(() => {
    const { exactData, x, y } = parsedData

    const barWidth = (0.8 * 794) / exactData.length

    return exactData.map((d, di) => {
      const height = 248 - y(d.y)

      return (
        <rect
          key={di}
          x={x(d.x) - barWidth / 2}
          y={y(d.y)}
          width={barWidth}
          height={height}
          fill={"#0066FF"}
          opacity={0.8}
        />
      )
    })
  }, [parsedData])

  const renderStackedPlot = useCallback(() => {
    const { stackedData, exactData, x, y } = parsedData

    const barWidth = (0.8 * 794) / exactData.length

    return stackedData.map((stack, stackI) => {
      return stack.map(d => {
        const [from, to] = d
        const { data } = d

        return (
          <rect
            key={data.x}
            x={x(data.x) - barWidth / 2}
            y={y(to)}
            width={barWidth}
            height={y(from) - y(to)}
            fill={stackColors[stackI]}
            opacity={1}
          />
        )
      })
    })
  }, [parsedData, stackColors])

  return (
    <svg width={"100%"} viewBox="0 0 794 248" tw="overflow-visible">
      {renderLinePlot()}
      {renderBarPlot()}
      {renderStackedPlot()}
    </svg>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.shape().isRequired,
}

export default React.memo(LineGraphContent)
