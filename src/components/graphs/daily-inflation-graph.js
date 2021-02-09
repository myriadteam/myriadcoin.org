import React, { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useGroupInfo } from "./hooks"

function DailyTransactionsGraph() {
  const [data, setData] = useState(null)
  const { getTimestamp } = useGroupInfo("1d")
  const { t } = useTranslation()

  useEffect(() => {
    fetch("https://xmy-history.coinid.org/processeddata/inflation/1d.json")
      .then(r => r.json())
      .then(inflationData => {
        setData(
          inflationData.map((v, i) => ({
            x: i,
            y: v,
          }))
        )
      })
  }, [])

  const renderXAxis = useCallback(
    x => t("dayMonth", { date: new Date(getTimestamp(x) * 1000) }),
    [getTimestamp, t]
  )
  const renderYAxis = useCallback(y => (100 * y).toFixed(1) + "%", [])
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
      return (100 * y).toFixed(2) + "%"
    },
    [data]
  )

  return (
    <LineGraph
      title={"Daily blocks mined"}
      data={data}
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

export default React.memo(DailyTransactionsGraph)
