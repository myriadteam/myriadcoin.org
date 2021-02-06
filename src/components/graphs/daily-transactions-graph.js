import React, { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"

function DailyTransactionsGraph() {
  const [data, setData] = useState(null)
  const [startTimestamp, setStartTimestamp] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    fetch("https://xmy-history.coinid.org/processeddata/groupInfo/1d.json")
      .then(r => r.json())
      .then(groupInfo => {
        setStartTimestamp(groupInfo.startTimestamp)
      })
  }, [])

  useEffect(() => {
    fetch("https://xmy-history.coinid.org/processeddata/transactions/1d.json")
      .then(r => r.json())
      .then(transactionsData => {
        const newData = transactionsData.map((v, i) => {
          return {
            x: i,
            y: v,
          }
        })
        setData(newData)
      })
  }, [])

  const getDayTimestamp = useCallback(day => {
    return startTimestamp + 24 * 60 * 60 * day
  }, [startTimestamp])

  const renderXAxis = useCallback(
    x => t("dayMonth", { date: new Date(getDayTimestamp(x) * 1000) }),
    [getDayTimestamp, t]
  )
  const renderYAxis = useCallback(y => y.toFixed(0), [])
  const renderXValue = useCallback(
    x =>
      t("dayMonthYear", {
        date: new Date((getDayTimestamp(x) + 12 * 60 * 60) * 1000),
      }),
    [getDayTimestamp, t]
  )
  const renderYValue = useCallback(
    y => t("formattedNumber", { number: y.toFixed(0) }) + " transactions",
    [t]
  )

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
      barPlotKeys={["y"]}
      barPlotColors={["#0066FF"]}
    />
  )
}

export default DailyTransactionsGraph
