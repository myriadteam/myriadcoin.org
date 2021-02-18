import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { animated } from "react-spring"

import StackedPlot from "./stacked-plot"
import LinePlot from "./line-plot"
import BarPlot from "./bar-plot"
import StackedAreas from "./stacked-areas"

import { useGraphZoomPan } from "./zoom-pan-context"

const LineGraphContent = ({
  parsedData,
  linePlotColors,
  stackColors,
  barPlotKeys,
  barPlotColors,
  areaStack,
}) => {
  const { viewBox, viewportWidth, viewportHeight } = useGraphZoomPan()

  return (
    <div tw="absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        viewBox={`0 0 ${viewportWidth} ${viewportHeight}`}
        style={{ transform: "scaleY(-1)" }}
        tw="pointer-events-none"
      >
        <animated.svg
          width={"100%"}
          preserveAspectRatio="none"
          viewBox={viewBox}
          tw="absolute inset-0 pointer-events-none"
        >
          {parsedData.linePlotData.length ? (
            <LinePlot
              linePlotData={parsedData.linePlotData}
              linePlotColors={linePlotColors}
            />
          ) : null}
          {barPlotKeys.length ? (
            <BarPlot
              parsedData={parsedData}
              barPlotKeys={barPlotKeys}
              barPlotColors={barPlotColors}
            />
          ) : null}
          {areaStack ? (
            <StackedAreas
              stackAreas={parsedData.stackAreas}
              stackColors={stackColors}
            />
          ) : stackColors.length ? (
            <StackedPlot parsedData={parsedData} stackColors={stackColors} />
          ) : null}
        </animated.svg>
      </svg>
    </div>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.shape().isRequired,
}

export default React.memo(LineGraphContent)
