import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { GROUP_NAMES, DAY, algoNames, algoColors } from "../../common/graph"

function BlocksMinedGraph({ theme }) {
  const [data, setData] = useState(null)
  const [group, setGroup] = useState(DAY)
  const [loading, setLoading] = useState(true)
  const groupName = GROUP_NAMES[group]

  const {
    renderXAxis,
    renderXValue,
    renderYAxis,
    renderYValue,
    renderKeyValue,
  } = useRenderValues({
    data,
    group,
    yValueOptions: { suffix: " blocks" },
  })

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const [blocks, algoBlocks] = await Promise.all([
        fetch(
          `https://xmy-history.coinid.org/processeddata/blocks/${groupName}.json`
        ).then(r => r.json()),
        fetch(
          `https://xmy-history.coinid.org/processeddata/algoBlocks/${groupName}.json`
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
      setLoading(false)
    }

    getData()
  }, [groupName])

  return (
    <LineGraph
      title=""
      group={group}
      loading={loading}
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
      onChangeGroup={setGroup}
      theme={theme}
    />
  )
}

export default React.memo(BlocksMinedGraph)
