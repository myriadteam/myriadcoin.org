import React, { useMemo, useRef } from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { useSpring } from "react-spring"

import LineGraphContent from "./line-graph-content"
import LineGraphXAxis from "./line-graph-x-axis"
import LineGraphYAxis from "./line-graph-y-axis"
import LineGraphMouse from "./line-graph-mouse"
import LineGraphValues from "./line-graph-values"
import LineGraphPeriods from "./line-graph-periods"

import ZoomPanContextProvider from "./zoom-pan-context-provider"

import { MediumText, MediumBoldText } from "../../common/elements"

import { parseDataForLineGraph } from "../../common/graph"

function LineGraph({
  data,
  renderXAxis,
  renderYAxis,
  renderXValue,
  renderYValue,
  renderKeyValue,
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
  keyNames,
  title,
}) {
  const boxRef = useRef()

  const hoverValues = useSpring(() => ({
    dataX: 0,
    dataY: 0,
    xValue: 0,
    opacity: 0,
  }))

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
      startPeriod={182}
      startY={startY}
    >
      <div tw="flex flex-row justify-between items-center mb-10 relative z-20">
        <MediumBoldText tw="mb-0">{title}</MediumBoldText>
        <LineGraphPeriods />
      </div>
      <div tw="flex text-grey font-normal text-xxxs sm:text-xxs md:text-sm lg:text-base">
        <LineGraphYAxis
          parsedData={parsedData}
          renderValue={renderYAxis}
          itemsCount={yAxisItemsCount}
        />
        <div tw="flex-grow">
          <div
            tw="relative"
            width="100%"
            style={{ paddingTop: (100 * 248) / 794 + "%" }}
          >
            <div tw="absolute z-10 inset-0">
              <LineGraphMouse
                parsedData={parsedData}
                renderXValue={renderXValue}
                renderYValue={renderYValue}
                hoverValues={hoverValues}
              />
            </div>
            <div tw="absolute inset-0" ref={boxRef}>
              <LineGraphContent
                parsedData={parsedData}
                linePlotColors={linePlotColors}
                stackColors={stackColors}
                areaStack={areaStack}
                barPlotKeys={barPlotKeys}
                barPlotColors={barPlotColors}
              />
            </div>
          </div>

          <LineGraphXAxis
            parsedData={parsedData}
            renderValue={renderXAxis}
            itemsCount={xAxisItemsCount}
          />
          <LineGraphValues
            keys={stackedKeys}
            colors={stackColors}
            names={keyNames}
            hoverValues={hoverValues}
            renderKeyValue={renderKeyValue}
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
  renderKeyValue: PropTypes.func,
  viewportWidth: PropTypes.number,
  viewportHeight: PropTypes.number,
  xAxisItemsCount: PropTypes.number,
  yAxisItemsCount: PropTypes.number,
  rollingWindow: PropTypes.number,
  centralRolling: PropTypes.bool,
  startY: PropTypes.number,
  endY: PropTypes.number,
  keyNames: PropTypes.shape(),
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
  renderKeyValue: key => v => key + v.toFixed(1),
  viewportWidth: 794,
  viewportHeight: 248,
  xAxisItemsCount: 4,
  yAxisItemsCount: 2,
  rollingWindow: 0,
  centralRolling: false,
  startY: undefined,
  endY: undefined,
  keyNames: {},
  stackedKeys: [],
  stackColors: [],
  linePlotKeys: [],
  linePlotColors: [],
  barPlotKeys: [],
  barPlotColors: [],
  areaStack: false,
}

export default LineGraph
