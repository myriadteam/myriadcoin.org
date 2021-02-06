import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { animated } from "react-spring"
import { useGraphZoomPan } from "./zoom-pan-context"

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
          opacity={0.8}
        />
      )
    })
  })
}

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

const StackedAreas = ({ stackAreas, stackColors }) => {
  return stackAreas.map((area, i) => <path d={area} fill={stackColors[i]} />)
}

const LineGraphContent = ({
  parsedData,
  linePlotColors,
  stackColors,
  barPlotKeys,
  barPlotColors,
  areaStack,
}) => {
  const { dragBind, viewBox } = useGraphZoomPan()

  return (
    <svg
      {...dragBind()}
      width="100%"
      viewBox={"0 0 794 248"}
      tw="overflow-hidden"
      style={{ transform: "scaleY(-1)" }}
    >
      <animated.svg
        width={"100%"}
        preserveAspectRatio="none"
        viewBox={viewBox}
        tw="overflow-visible absolute inset-0"
      >
        <LinePlot
          linePlotData={parsedData.linePlotData}
          linePlotColors={linePlotColors}
        />
        <BarPlot
          parsedData={parsedData}
          barPlotKeys={barPlotKeys}
          barPlotColors={barPlotColors}
        />
        {areaStack ? (
          <StackedAreas
            stackAreas={parsedData.stackAreas}
            stackColors={stackColors}
          />
        ) : (
          <StackedPlot parsedData={parsedData} stackColors={stackColors} />
        )}
      </animated.svg>
    </svg>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.shape().isRequired,
}

export default React.memo(LineGraphContent)
