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
  algoNames,
  algoColors,
} from "../../common/graph"

function BlocksMinedGraph() {
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
    renderKeyValue,
  } = useRenderValues({
    data,
    group,
    yAxisOptions: { shorten: { precision: 0 } },
    yValueOptions: { suffix: " blocks" },
  })

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const [blocks, algoBlocks] = await Promise.all([
        fetch(
          `https://xmy-history.coinid.org/processeddata/blocks/${groupName}.json`
        ).then(r => r.json()),
        fetch(
          `https://xmy-history.coinid.org/processeddata/algoBlocks/${groupName}.json`
        ).then(r => r.json()),
      ])

      const newData = blocks.map((v, i) => {
        return {
          x: i,
          y: v,
          ...algoBlocks[i],
        }
      })

      setData(newData)
      setLoading(false)
    }

    getData()
  }, [groupName])

  return (
    <>
      <div>
        <MediumBoldText tw="mb-10">
          {t("analytics.blocks_mined.title")}
        </MediumBoldText>
        <BodyText tw="mb-14">
          {t("analytics.blocks_mined.description")}
        </BodyText>

        <LineGraph
          title=""
          group={group}
          loading={loading}
          data={data}
          startY={0}
          renderXAxis={renderXAxis}
          renderYAxis={renderYAxis}
          renderXValue={renderXValue}
          renderYValue={renderYValue}
          renderKeyValue={renderKeyValue}
          keyNames={algoNames}
          stackedKeys={Object.keys(algoNames)}
          stackColors={algoColors}
        />
        <GroupingSelector
          options={[THREE_HOURS, SIX_HOURS, DAY, WEEK, MONTH]}
          onChange={setGroup}
        />
      </div>
    </>
  )
}

export default React.memo(BlocksMinedGraph)
