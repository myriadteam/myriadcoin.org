import React, { useMemo } from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import LineGraphContent from "./line-graph-content"
import LineGraphXAxis from "./line-graph-x-axis"
import LineGraphYAxis from "./line-graph-y-axis"
import LineGraphMouse from "./line-graph-mouse"

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
}) {
  const parsedData = useMemo(
    () => parseDataForLineGraph(data, viewportWidth, viewportHeight),
    [data, viewportHeight, viewportWidth]
  )

  if (data === null) {
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

  if (!data.length) {
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
    <div tw="flex text-grey font-normal text-xxxs sm:text-xxs md:text-sm lg:text-base">
      <LineGraphYAxis
        parsedData={parsedData}
        renderValue={renderYAxis}
        itemsCount={yAxisItemsCount}
      />
      <div tw="flex-grow">
        <div tw="relative">
          <LineGraphContent parsedData={parsedData} />
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
}

LineGraph.defaultProps = {
  data: [
    { x: 0, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 2.5 },
  ],
  renderXAxis: v => v.toFixed(1),
  renderYAxis: v => v.toFixed(1),
  renderXValue: v => v.toFixed(1),
  renderYValue: v => v.toFixed(1),
  viewportWidth: 794,
  viewportHeight: 248,
  xAxisItemsCount: 4,
  yAxisItemsCount: 4,
}

export default LineGraph
