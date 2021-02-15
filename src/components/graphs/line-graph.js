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
import { useDimensions } from "../../hooks/layout"

import { GROUP_PERIODS } from "../../common/graph"

function LineGraph({
  data,
  renderXAxis,
  renderYAxis,
  renderXValue,
  renderYValue,
  renderKeyValue,
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
  loading,
  group,
}) {
  const boxRef = useRef()
  const viewportBox = useRef()

  const { width: viewportWidth, height: viewportHeight } = useDimensions(
    viewportBox
  )

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

  const renderGraph = () => {
    if (loading || parsedData === null || !parsedData.exactData.length) {
      return (
        <div>
          <div tw="flex flex-row justify-between items-center mb-10 relative z-20">
            <MediumBoldText tw="mb-0">{title}</MediumBoldText>
            <LineGraphPeriods />
          </div>

          <div tw="flex text-grey font-normal text-xxxs sm:text-xxs md:text-sm lg:text-base">
            <LineGraphYAxis />
            <div tw="flex-grow">
              <div
                tw="relative"
                width="100%"
                style={{
                  paddingTop: (100 * viewportHeight) / viewportWidth + "%",
                }}
              >
                <div tw="absolute inset-0 flex justify-center items-center mb-5">
                  <MediumText>
                    {parsedData === null || loading
                      ? "Loading..."
                      : "No data.. :("}
                  </MediumText>
                </div>
              </div>
              <div>
                <LineGraphXAxis />
                <LineGraphValues />
              </div>
            </div>
          </div>
        </div>
      )
    }

    const { value: startPeriod } = GROUP_PERIODS[group].find(c => c.isDefault)

    return (
      <ZoomPanContextProvider
        parsedData={parsedData}
        boxRef={boxRef}
        startPeriod={startPeriod}
        startY={startY}
        viewportWidth={viewportWidth}
        viewportHeight={viewportHeight}
      >
        <div tw="flex flex-row justify-between items-center mb-10 relative z-20">
          <MediumBoldText tw="mb-0">{title}</MediumBoldText>
          <LineGraphPeriods group={group} />
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
              style={{
                paddingTop: (100 * viewportHeight) / viewportWidth + "%",
              }}
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

            <div>
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
        </div>
      </ZoomPanContextProvider>
    )
  }

  return (
    <>
      <div tw="absolute w-6 h-7 sm:w-16 sm:h-5" ref={viewportBox} />
      {renderGraph()}
    </>
  )
}

LineGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  renderXAxis: PropTypes.func,
  renderYAxis: PropTypes.func,
  renderXValue: PropTypes.func,
  renderYValue: PropTypes.func,
  renderKeyValue: PropTypes.func,
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
  xAxisItemsCount: 2,
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
