import React, { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import LineGraph from "./line-graph"
import { useGroupInfo } from "./hooks"

import { MediumBoldText } from "../../common/elements"

import { GROUP_NAMES, DAY, WEEK, MONTH } from "../../common/graph"

function BlocksMinedGraph() {
  const [data, setData] = useState(null)
  const [group, setGroup] = useState(DAY)
  const [loading, setLoading] = useState(true)
  const groupName = GROUP_NAMES[group]

  const { getTimestamp } = useGroupInfo(group, groupName)
  const { t } = useTranslation()

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

  const renderXAxis = useCallback(
    x => t("dayMonth", { date: new Date(getTimestamp(x) * 1000) }),
    [getTimestamp, t]
  )
  const renderYAxis = useCallback(y => (y / 1000).toFixed(1) + "K", [])
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
      return t("formattedNumber", { number: y.toFixed(0) }) + " blocks"
    },
    [data, t]
  )

  const renderKeyValue = useCallback(
    key => x => {
      const d = data[Math.round(x)]
      if (!d) {
        return
      }
      const v = d[key]
      return (
        t("formattedNumber", { number: v }) +
        " (" +
        ((100 * v) / d.y).toFixed(1) +
        "%)"
      )
    },
    [data, t]
  )

  return (
    <>
      <div>
        <MediumBoldText tw="mb-10">
          {t("analytics.blocks_mined.title")}
        </MediumBoldText>
        <div>
          <span>Group: </span>
          <button tw="mr-1" onClick={() => setGroup(DAY)}>
            Day
          </button>
          <button tw="mr-1" onClick={() => setGroup(WEEK)}>
            Week
          </button>
          <button onClick={() => setGroup(MONTH)}>Month</button>
        </div>
      </div>
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
    </>
  )
}

export default React.memo(BlocksMinedGraph)
