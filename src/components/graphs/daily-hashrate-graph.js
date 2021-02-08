import React, { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useGroupInfo } from "./hooks"

function DailyDifficultyGraph() {
  const [data, setData] = useState(null)
  const { getTimestamp } = useGroupInfo("1d")
  const { t } = useTranslation()

  useEffect(() => {
    const getData = async () => {
      const workSecondsData = await fetch(
        "https://xmy-history.coinid.org/processeddata/workSeconds/1d.json"
      ).then(r => r.json())

      const newData = workSecondsData.map((v, i) => {
        return {
          x: i,
          y: v[2],
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
  const renderYAxis = useCallback(y => {
    if (y > 100) {
      return (y / 1000).toFixed(1) + "K"
    }

    return y.toFixed(2)
  }, [])
  const renderXValue = useCallback(
    x =>
      t("dayMonthYear", {
        date: new Date((getTimestamp(x) + 12 * 60 * 60) * 1000),
      }),
    [getTimestamp, t]
  )
  const renderYValue = useCallback(
    y => {
      if (y < 1) {
        return (
          t("formattedNumber2Decimals", { number: (y * 1000).toFixed(100) }) +
          "m"
        )
      }
      return t("formattedNumber2Decimals", { number: y.toFixed(100) })
    },
    [t]
  )

  return (
    <LineGraph
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

export default React.memo(DailyDifficultyGraph)
