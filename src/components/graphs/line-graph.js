import React, { useMemo, useRef } from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import LineGraphContent from "./line-graph-content"
import LineGraphXAxis from "./line-graph-x-axis"
import LineGraphYAxis from "./line-graph-y-axis"
import LineGraphMouse from "./line-graph-mouse"

import { ZoomPanContextProvider } from "./zoom-pan-context"

import { MediumText } from "../../common/elements"

import { parseDataForLineGraph } from "../../common/graph"

function LineGraph({
  data,
  renderXAxis,
  renderYAxis,
  renderXValue,
  renderYValue,
  viewportWidth,
  viewportHeight,
  xAxisItemsCount,
  yAxisItemsCount,
  rollingWindow,
  centralRolling,
  startY,
  endY,
  stackedKeys,
  stackColors,
  barPlotKeys,
  barPlotColors,
  linePlotKeys,
  linePlotColors,
  areaStack,
}) {
  const boxRef = useRef()
  const parsedData = useMemo(() => {
    if (!data) {
      return null
    }

    return parseDataForLineGraph({
      rawData: data,
      rollingWindow,
      centralRolling,
      startY,
      endY,
      stackedKeys,
      linePlotKeys,
    })
  }, [
    data,
    rollingWindow,
    centralRolling,
    startY,
    endY,
    stackedKeys,
    linePlotKeys,
  ])

  if (parsedData === null) {
    return (
      <div
        tw="relative w-full"
        style={{ paddingTop: (100 * viewportWidth) / viewportHeight / 2 }}
      >
        <div tw="absolute inset-0 flex justify-center items-center mb-5">
          <MediumText>Loading...</MediumText>
        </div>
      </div>
    )
  }

  if (!parsedData.exactData.length) {
    return (
      <div
        tw="relative w-full"
        style={{ paddingTop: (100 * viewportWidth) / viewportHeight / 2 }}
      >
        <div tw="absolute inset-0 flex justify-center items-center mb-5">
          <MediumText>No data.. :(</MediumText>
        </div>
      </div>
    )
  }

  return (
    <ZoomPanContextProvider
      parsedData={parsedData}
      boxRef={boxRef}
      startPeriod={90}
      startY={startY}
    >
      <div tw="flex text-grey font-normal text-xxxs sm:text-xxs md:text-sm lg:text-base">
        <LineGraphYAxis
          parsedData={parsedData}
          renderValue={renderYAxis}
          itemsCount={yAxisItemsCount}
        />
        <div tw="flex-grow">
          <div tw="relative" ref={boxRef}>
            <LineGraphContent
              parsedData={parsedData}
              linePlotColors={linePlotColors}
              stackColors={stackColors}
              areaStack={areaStack}
              barPlotKeys={barPlotKeys}
              barPlotColors={barPlotColors}
            />
            <LineGraphMouse
              parsedData={parsedData}
              renderXValue={renderXValue}
              renderYValue={renderYValue}
            />
          </div>
          <LineGraphXAxis
            parsedData={parsedData}
            renderValue={renderXAxis}
            itemsCount={xAxisItemsCount}
          />
        </div>
      </div>
    </ZoomPanContextProvider>
  )
}

LineGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  renderXAxis: PropTypes.func,
  renderYAxis: PropTypes.func,
  renderXValue: PropTypes.func,
  renderYValue: PropTypes.func,
  viewportWidth: PropTypes.number,
  viewportHeight: PropTypes.number,
  xAxisItemsCount: PropTypes.number,
  yAxisItemsCount: PropTypes.number,
  rollingWindow: PropTypes.number,
  centralRolling: PropTypes.bool,
  startY: PropTypes.number,
  endY: PropTypes.number,
  stackedKeys: PropTypes.arrayOf(PropTypes.string),
  stackColors: PropTypes.arrayOf(PropTypes.string),
  linePlotKeys: PropTypes.arrayOf(PropTypes.string),
  linePlotColors: PropTypes.arrayOf(PropTypes.string),
  barPlotKeys: PropTypes.arrayOf(PropTypes.string),
  barPlotColors: PropTypes.arrayOf(PropTypes.string),
  areaStack: PropTypes.bool,
}

LineGraph.defaultProps = {
  data: null,
  renderXAxis: v => v.toFixed(1),
  renderYAxis: v => v.toFixed(1),
  renderXValue: v => v.toFixed(1),
  renderYValue: v => v.toFixed(1),
  viewportWidth: 794,
  viewportHeight: 248,
  xAxisItemsCount: 4,
  yAxisItemsCount: 2,
  rollingWindow: 0,
  centralRolling: false,
  startY: undefined,
  endY: undefined,
  stackedKeys: [],
  stackColors: [],
  linePlotKeys: [],
  linePlotColors: [],
  barPlotKeys: [],
  barPlotColors: [],
  areaStack: false,
}

export default LineGraph
