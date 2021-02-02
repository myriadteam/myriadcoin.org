import React, { useCallback } from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

const LineGraphContent = ({
  parsedData,
  linePlotColors,
  stackColors,
  barPlotKeys,
  barPlotColors,
}) => {
  const renderLinePlot = useCallback(() => {
    return parsedData.linePlotData.map(({ svgLine }, i) => (
      <path
        key={i}
        d={svgLine}
        fill="none"
        stroke={linePlotColors[i]}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    ))
  }, [linePlotColors, parsedData.linePlotData])

  const renderBarPlot = useCallback(() => {
    const { exactData, x, y } = parsedData

    const containerBarWidth = (0.8 * 794) / exactData.length
    const barWidth = containerBarWidth / barPlotKeys.length

    return exactData.map((d, di) => {
      return barPlotKeys.map((barKey, barI) => {
        return (
          <rect
            key={barKey + di}
            x={x(d.x) - containerBarWidth / 2 + barWidth * barI}
            y={y(d[barKey])}
            width={barWidth}
            height={y(0) - y(d[barKey])}
            fill={barPlotColors[barI]}
            opacity={0.8}
          />
        )
      })
    })
  }, [barPlotColors, barPlotKeys, parsedData])

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
      {renderStackedPlot()}
      {renderBarPlot()}
      {renderLinePlot()}
    </svg>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.shape().isRequired,
}

export default React.memo(LineGraphContent)
