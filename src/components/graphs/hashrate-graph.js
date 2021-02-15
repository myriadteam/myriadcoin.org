import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import GroupingSelector from "./grouping-selector"
import { useRenderValues } from "./hooks"

import { MediumBoldText, BodyText } from "../../common/elements"
import {
  GROUP_NAMES,
  THREE_HOURS,
  SIX_HOURS,
  DAY,
  WEEK,
  MONTH,
  algoColors,
} from "../../common/graph"

const savedData = {}

function HashrateGraph({ algo = 0, scale = 1, overlayStyle }) {
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
  } = useRenderValues({
    data,
    group,
    scale: scale,
    yValueOptions: {
      shorten: { precision: 3, space: true },
      suffix: "H/s",
    },
    valueMultiplier: 4295032833,
  })

  useEffect(() => {
    setLoading(true)
    const uri = `https://xmy-history.coinid.org/processeddata/workSeconds/${groupName}.json`

    if (savedData[uri]) {
      const newData = savedData[uri].map((v, i) => {
        return {
          x: i,
          y: v[algo] / scale,
        }
      })
      setData(newData)
      setLoading(false)
    } else {
      fetch(uri)
        .then(r => r.json())
        .then(difficultyData => {
          savedData[uri] = difficultyData

          const newData = difficultyData.map((v, i) => {
            return {
              x: i,
              y: v[algo] / scale,
            }
          })

          setData(newData)
          setLoading(false)
        })
    }
  }, [algo, groupName, scale])

  return (
    <>
      <div>
        <MediumBoldText tw="mb-10">
          {t("analytics.hash_rate.title")}
        </MediumBoldText>
        <BodyText tw="mb-14">{t("analytics.hash_rate.description")}</BodyText>
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
          barPlotColors={[algoColors[algo]]}
          overlayStyle={overlayStyle}
        />
        <GroupingSelector
          options={[THREE_HOURS, SIX_HOURS, DAY, WEEK, MONTH]}
          onChange={setGroup}
        />
      </div>
    </>
  )
}

export default React.memo(HashrateGraph)
