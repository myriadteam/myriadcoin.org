import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { GROUP_NAMES, DAY, algoColors } from "../../common/graph"

const savedData = {}

function DifficultyGraph({ algo = 0, scale = 1, overlayStyle }) {
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
    scale: scale,
    yValueOptions: { shorten: { precision: 2 } },
  })

  useEffect(() => {
    setLoading(true)
    const uri = `https://xmy-history.coinid.org/processeddata/difficulty/${groupName}.json`

    if (savedData[uri]) {
      const newData = savedData[uri].map((v, i) => {
        return {
          x: i,
          y: v[algo] / scale,
        }
      })
      setData(newData)
      setLoading(false)
    } else {
      fetch(uri)
        .then(r => r.json())
        .then(difficultyData => {
          savedData[uri] = difficultyData
          const newData = difficultyData.map((v, i) => {
            return {
              x: i,
              y: v[algo] / scale,
            }
          })
          setData(newData)
          setLoading(false)
        })
    }
  }, [algo, groupName, scale])

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
      barPlotColors={[algoColors[algo]]}
      overlayStyle={overlayStyle}
      onChangeGroup={setGroup}
    />
  )
}

export default React.memo(DifficultyGraph)
