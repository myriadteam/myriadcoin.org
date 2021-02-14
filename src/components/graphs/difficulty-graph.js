import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { MediumBoldText, BodyText } from "../../common/elements"

import { GROUP_NAMES, DAY, WEEK, MONTH } from "../../common/graph"
const SCALE = 1000000000

function DifficultyGraph() {
  const [data, setData] = useState(null)
  const [group, setGroup] = useState(DAY)
  const [loading, setLoading] = useState(true)
  const groupName = GROUP_NAMES[group]

  const { t } = useTranslation()

  const {
    renderXAxis,
    renderXValue,
    renderYAxis,
    renderYValue,
  } = useRenderValues({ data, group, scale: SCALE })

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://xmy-history.coinid.org/processeddata/difficulty/${groupName}.json`
    )
      .then(r => r.json())
      .then(difficultyData => {
        const newData = difficultyData.map((v, i) => {
          return {
            x: i,
            y: v[2] / SCALE,
          }
        })
        setData(newData)
        setLoading(false)
      })
  }, [groupName])

  return (
    <>
      <div>
        <MediumBoldText tw="mb-10">
          Groestl {t("analytics.mining_difficulty.title")}
        </MediumBoldText>
        <BodyText tw="mb-14">
          {t("analytics.mining_difficulty.description")}
        </BodyText>

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

export default React.memo(DifficultyGraph)
