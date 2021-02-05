import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"

function DailyBlocksMinedGraph() {
  const [data, setData] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const getData = async () => {
      const groupInfo = await fetch(
        "https://xmy-history.coinid.org/processeddata/groupInfo/1d.json"
      ).then(r => r.json())

      const blocks = await fetch(
        "https://xmy-history.coinid.org/processeddata/blocks/1d.json"
      ).then(r => r.json())

      const algoBlocks = await fetch(
        "https://xmy-history.coinid.org/processeddata/algoBlocks/1d.json"
      ).then(r => r.json())

      const startTimestamp = groupInfo.startTimestamp

      const getDayTimestamp = day => {
        return startTimestamp + 24 * 60 * 60 * day
      }

      const newData = blocks.map((v, i) => {
        return {
          x: getDayTimestamp(i),
          y: v,
          ...algoBlocks[i],
        }
      })

      setData(newData)
    }

    getData()
  }, [])

  const renderXAxis = x => t("dayMonth", { date: new Date(x * 1000) })
  const renderYAxis = y => y.toFixed(0)
  const renderXValue = x =>
    t("dayMonthYear", { date: new Date((x + 12 * 60 * 60) * 1000) })
  const renderYValue = y =>
    t("formattedNumber", { number: y.toFixed(0) }) + " blocks"

  return (
    <LineGraph
      data={data}
      xAxisItemsCount={4}
      yAxisItemsCount={3}
      startY={0}
      renderXAxis={renderXAxis}
      renderYAxis={renderYAxis}
      renderXValue={renderXValue}
      renderYValue={renderYValue}
      barPlotKeys={[]}
      barPlotColors={[]}
      stackedKeys={["0", "1", "2", "3", "4", "5", "6"]}
      stackColors={[
        "#0066FF",
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "grey",
        "orange",
      ]}
    />
  )
}

export default DailyBlocksMinedGraph
