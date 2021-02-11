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
    fetch("https://xmy-history.coinid.org/processeddata/difficulty/1d.json")
      .then(r => r.json())
      .then(difficultyData => {
        const newData = difficultyData.map((v, i) => {
          return {
            x: i,
            y: v[2] / 1000,
          }
        })
        setData(newData)
      })
  }, [])

  const renderXAxis = useCallback(
    x => t("dayMonth", { date: new Date(getTimestamp(x) * 1000) }),
    [getTimestamp, t]
  )
  const renderYAxis = useCallback(y => {
    if (y > 1000) {
      return (y / 1000).toFixed(1) + "M"
    }

    if (y > 1) {
      return y.toFixed(1) + "K"
    }

    return (y * 1000).toFixed(1)
  }, [])
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
      if (y < 0.001) {
        return (
          t("formattedNumber2Decimals", {
            number: (y * 1000 * 1000).toFixed(100),
          }) + "m"
        )
      }
      return t("formattedNumber2Decimals", { number: (y * 1000).toFixed(100) })
    },
    [data, t]
  )

  return (
    <LineGraph
      title={"Daily groestl difficulty"}
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
