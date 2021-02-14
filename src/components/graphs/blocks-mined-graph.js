import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useRenderValues } from "./hooks"

import { MediumBoldText, BodyText } from "../../common/elements"
import {
  GROUP_NAMES,
  THREE_HOURS,
  SIX_HOURS,
  DAY,
  WEEK,
  MONTH,
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
          keyNames={{
            0: "SHA256D",
            1: "Scrypt",
            2: "Groestl",
            3: "Skein",
            4: "Qubit",
            5: "Yescrypt",
            6: "Argon2d",
          }}
          stackedKeys={["0", "1", "2", "3", "4", "5", "6"]}
          stackColors={[
            "#0066FF",
            "#A5AEFF",
            "#9570FF",
            "green",
            "purple",
            "#FF9E4F",
            "#FFE3B1",
          ]}
        />
        <div tw="text-right">
          <span>Grouping: </span>
          <button tw="mr-1" onClick={() => setGroup(THREE_HOURS)}>
            3 Hours
          </button>
          <button tw="mr-1" onClick={() => setGroup(SIX_HOURS)}>
            6 Hours
          </button>
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

export default React.memo(BlocksMinedGraph)
