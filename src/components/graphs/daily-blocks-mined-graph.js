import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"

function DailyBlocksMinedGraph() {
  const [data, setData] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    const getData = async () => {
      const times = await fetch(
        "https://xmy-history.coinid.org/latestblocks/100000/mediantime.json"
      ).then(r => r.json())

      const startDate = new Date(times[0] * 1000)
      const startTimestamp = startDate.setUTCHours(24, 0, 0, 0) / 1000 // first day

      const endDate = new Date(times[times.length - 1] * 1000)
      const endTimestamp = endDate.setUTCHours(0, 0, 0, 0) / 1000 // last day

      const totalDays = (endTimestamp - startTimestamp) / (24 * 60 * 60)

      const blockPerDay = []

      const getDayTimestamp = day => {
        return startTimestamp + 24 * 60 * 60 * day
      }

      for (var i = 0; i < totalDays; i++) {
        const startOfDay = getDayTimestamp(i)
        const endOfDay = getDayTimestamp(i + 1)

        const startIndex = times.findIndex(time => time >= startOfDay)
        const endIndex = times.findIndex(time => time > endOfDay)

        const blocks = endIndex - startIndex

        blockPerDay.push(blocks)
      }

      const newData = blockPerDay.map((v, i) => ({
        x: getDayTimestamp(i),
        y: v,
      }))

      setData(newData)
    }

    getData()
  }, [])

  const renderXAxis = x => t("dayMonth", { date: new Date(x * 1000) })
  const renderYAxis = y => y.toFixed(0)
  const renderXValue = x => t("dayMonthYear", { date: new Date(x * 1000) })
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
    />
  )
}

export default DailyBlocksMinedGraph
