import React, { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useGroupInfo } from "./hooks"

import { MediumBoldText, BodyText } from "../../common/elements"

import { GROUP_NAMES, DAY, WEEK, MONTH } from "../../common/graph"

function MinedCoinsGraph() {
  const [data, setData] = useState(null)
  const [group, setGroup] = useState(DAY)
  const [loading, setLoading] = useState(true)
  const groupName = GROUP_NAMES[group]

  const { getTimestamp } = useGroupInfo(group, groupName)
  const { t } = useTranslation()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://xmy-history.coinid.org/processeddata/inflation/${groupName}.json`
    )
      .then(r => r.json())
      .then(difficultyData => {
        const newData = difficultyData.map((v, i) => {
          return {
            x: i,
            y: v,
          }
        })
        setData(newData)
        setLoading(false)
      })
  }, [groupName])

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
      const d = data[Math.round(x)]
      if (!d) {
        return null
      }
      const { y } = d
      return (100 * y).toFixed(2) + "%"
    },
    [data]
  )

  return (
    <>
      <div>
        <MediumBoldText tw="mb-10">
          {t("analytics.inflation.title")}
        </MediumBoldText>
        <BodyText tw="mb-14">{t("analytics.inflation.description")}</BodyText>
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
          barPlotColors={["#0066FF"]}
        />
        <div tw="text-right">
          <span>Grouping: </span>
          <button tw="mr-1" onClick={() => setGroup(DAY)}>
            Day
          </button>
          <button tw="mr-1" onClick={() => setGroup(WEEK)}>
            Week
          </button>
          <button onClick={() => setGroup(MONTH)}>Month</button>
        </div>
      </div>
    </>
  )
}

export default React.memo(MinedCoinsGraph)
