import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { GROUP_NAMES, DAY } from "../../common/graph"

function InflationGraph({ overlayStyle }) {
  const [data, setData] = useState(null)
  const [group, setGroup] = useState(DAY)
  const [loading, setLoading] = useState(true)
  const groupName = GROUP_NAMES[group]

  const {
    renderXAxis,
    renderXValue,
    renderYAxis,
    renderYValue,
  } = useRenderValues({
    data,
    group,
    yAxisOptions: { shorten: { precision: 0 }, suffix: "%" },
    yValueOptions: { shorten: { precision: 2 }, suffix: "%" },
  })

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://xmy-history.coinid.org/processeddata/inflation/${groupName}.json`
    )
      .then(r => r.json())
      .then(difficultyData => {
        const newData = difficultyData.map((v, i) => {
          return {
            x: i,
            y: 100 * v,
          }
        })
        setData(newData)
        setLoading(false)
      })
  }, [groupName])

  return (
    <LineGraph
      loading={loading}
      group={group}
      data={data}
      startY={0}
      renderXAxis={renderXAxis}
      renderYAxis={renderYAxis}
      renderXValue={renderXValue}
      renderYValue={renderYValue}
      barPlotKeys={["y"]}
      barPlotColors={["#0066FF"]}
      overlayStyle={overlayStyle}
      onChangeGroup={setGroup}
    />
  )
}

export default React.memo(InflationGraph)
