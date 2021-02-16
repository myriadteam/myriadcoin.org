import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { GROUP_NAMES, DAY } from "../../common/graph"
const SCALE = 1000000

function MinedCoinsGraph({ overlayStyle }) {
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
    scale: SCALE,
    yValueOptions: { suffix: " XMY" },
  })

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://xmy-history.coinid.org/processeddata/minedCoins/${groupName}.json`
    )
      .then(r => r.json())
      .then(difficultyData => {
        const newData = difficultyData.map((v, i) => {
          return {
            x: i,
            y: v / SCALE,
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

export default React.memo(MinedCoinsGraph)
