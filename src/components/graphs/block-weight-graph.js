import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"

function BlockWeightGraph() {
  const [data, setData] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const getData = async () => {
      const sizes = await fetch(
        "https://xmy-history.coinid.org/latestblocks/100/weight.json"
      ).then(r => r.json())

      const blockCount = await fetch(
        "https://xmy-history.coinid.org/latestblocks/block_count.json"
      ).then(r => r.json())

      const newData = sizes.map((v, i) => ({
        x: blockCount - sizes.length + i + 1,
        y: v,
      }))

      setData(newData)
    }

    getData()
  }, [])

  const renderXAxis = x => t("formattedNumber", { number: x.toFixed(0) })
  const renderYAxis = y => (y / 1000).toFixed(1) + "K"
  const renderXValue = x =>
    "Block " + t("formattedNumber", { number: x.toFixed(0) })
  const renderYValue = y =>
    t("formattedNumber", { number: y.toFixed(0) }) + " WUs"

  return (
    <LineGraph
      data={data}
      renderXAxis={renderXAxis}
      renderYAxis={renderYAxis}
      renderXValue={renderXValue}
      renderYValue={renderYValue}
      xAxisItemsCount={4}
      yAxisItemsCount={3}
      rollingWindow={5}
      centralRolling={true}
    />
  )
}

export default BlockWeightGraph
