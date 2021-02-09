import React, { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useGroupInfo } from "./hooks"

function DailyBlocksMinedGraph() {
  const [data, setData] = useState(null)
  const { getTimestamp } = useGroupInfo("1d")
  const { t } = useTranslation()

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

  const renderXAxis = useCallback(
    x => t("dayMonth", { date: new Date(getTimestamp(x) * 1000) }),
    [getTimestamp, t]
  )
  const renderYAxis = useCallback(y => (y / 1000).toFixed(1) + "K", [])
  const renderXValue = useCallback(
    x =>
      t("dayMonthYear", {
        date: new Date((getTimestamp(x) + 12 * 60 * 60) * 1000),
      }),
    [getTimestamp, t]
  )
  const renderYValue = useCallback(
    x => {
      const { y } = data[Math.round(x)]
      return t("formattedNumber", { number: y.toFixed(0) }) + " blocks"
    },
    [data, t]
  )

  const renderKeyValue = useCallback(
    key => x => {
      const v = data[Math.round(x)][key]
      return v
    },
    [data]
  )

  return (
    <LineGraph
      data={data}
      startY={0}
      renderXAxis={renderXAxis}
      renderYAxis={renderYAxis}
      renderXValue={renderXValue}
      renderYValue={renderYValue}
      renderKeyValue={renderKeyValue}
      barPlotKeys={[]}
      barPlotColors={[]}
      keyNames={{
        0: "SHA256D",
        1: "Scrypt",
        2: "Groestl",
        3: "Skein",
        4: "Qubit",
        5: "Yescrypt",
        6: "Argon2d",
      }}
      stackedKeys={["0", "1", "2", "3", "4", "5", "6"]}
      stackColors={[
        "#0066FF",
        "#A5AEFF",
        "#9570FF",
        "green",
        "purple",
        "#FF9E4F",
        "#FFE3B1",
      ]}
    />
  )
}

export default React.memo(DailyBlocksMinedGraph)
