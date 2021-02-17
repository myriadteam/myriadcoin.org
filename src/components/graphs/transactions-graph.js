import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { GROUP_NAMES, DAY } from "../../common/graph"

function TransactionsGraph({ theme }) {
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
    yValueOptions: { suffix: " transactions" },
  })

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://xmy-history.coinid.org/processeddata/transactions/${groupName}.json`
    )
      .then(r => r.json())
      .then(difficultyData => {
        const newData = difficultyData.map((v, i) => {
          return {
            x: i,
            y: v,
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
      onChangeGroup={setGroup}
      theme={theme}
    />
  )
}

export default React.memo(TransactionsGraph)
