import React, { useMemo } from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

import LineGraphContent from "./line-graph-content"
import LineGraphXAxis from "./line-graph-x-axis"
import LineGraphYAxis from "./line-graph-y-axis"
import LineGraphMouse from "./line-graph-mouse"

import { parseDataForLineGraph } from "../../common/graph"

function LineGraph({
  data,
  renderXAxis,
  renderYAxis,
  renderXValue,
  renderYValue,
  viewportWidth,
  viewportHeight,
}) {
  const parsedData = useMemo(
    () => parseDataForLineGraph(data, viewportWidth, viewportHeight),
    [data, viewportHeight, viewportWidth]
  )

  if (!parsedData) {
    return <div>Loading...</div>
  }

  return (
    <div tw="flex text-grey font-normal text-xxxs sm:text-xxs md:text-sm lg:text-base">
      <LineGraphYAxis parsedData={parsedData} renderValue={renderYAxis} />
      <div tw="flex-grow">
        <div tw="relative">
          <LineGraphContent parsedData={parsedData} />
          <LineGraphMouse
            parsedData={parsedData}
            renderXValue={renderXValue}
            renderYValue={renderYValue}
          />
        </div>
        <LineGraphXAxis parsedData={parsedData} renderValue={renderXAxis} />
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
}

export default LineGraph
