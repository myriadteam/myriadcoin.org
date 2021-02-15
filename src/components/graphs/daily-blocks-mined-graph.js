import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { DAY, algoNames, algoColors } from "../../common/graph"

function DailyBlocksMinedGraph() {
  const [data, setData] = useState(null)

  const {
    renderXAxis,
    renderXValue,
    renderYAxis,
    renderYValue,
    renderKeyValue,
  } = useRenderValues({
    data,
    group: DAY,
    yAxisOptions: { shorten: { precision: 0 } },
    yValueOptions: { suffix: " blocks" },
  })

  useEffect(() => {
    const getData = async () => {
      const [blocks, algoBlocks] = await Promise.all([
        fetch(
          "https://xmy-history.coinid.org/processeddata/blocks/1d.json"
        ).then(r => r.json()),
        fetch(
          "https://xmy-history.coinid.org/processeddata/algoBlocks/1d.json"
        ).then(r => r.json()),
      ])

      const newData = blocks.map((v, i) => {
        return {
          x: i,
          y: v,
          ...algoBlocks[i],
        }
      })

      setData(newData)
    }

    getData()
  }, [])

  return (
    <LineGraph
      title={"Daily blocks mined"}
      group={DAY}
      data={data}
      startY={0}
      renderXAxis={renderXAxis}
      renderYAxis={renderYAxis}
      renderXValue={renderXValue}
      renderYValue={renderYValue}
      renderKeyValue={renderKeyValue}
      keyNames={algoNames}
      stackedKeys={Object.keys(algoNames)}
      stackColors={algoColors}
    />
  )
}

export default React.memo(DailyBlocksMinedGraph)
