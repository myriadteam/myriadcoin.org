import React, { useEffect, useState, useMemo } from "react"
import LineGraphContent from "./line-graph-content"
import tw from "twin.macro"

import { MediumBoldText } from "../../common/elements"
import { parseDataForLineGraph } from "../../common/graph"

function LineGraph() {
  const [parsedData, setParsedData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const sizes = await fetch(
        "https://xmy-history.coinid.org/latestblocks/100/weight.json"
      ).then(r => r.json())

      const blockCount = await fetch(
        "https://xmy-history.coinid.org/latestblocks/block_count.json"
      ).then(r => r.json())

      const newData = sizes.map((v, i) => ({
        x: blockCount - sizes.length + i + 1,
        y: v,
      }))

      setParsedData(parseDataForLineGraph(newData, 794, 248))
    }

    getData()
  }, [])

  if (!parsedData) {
    return null
  }

  return (
    <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-16 sm:py-18 rounded">
      <MediumBoldText>Block weights</MediumBoldText>
      <div tw="flex flex-row text-grey font-normal text-xxxs sm:text-base">
        <div tw="flex flex-col justify-between pt-1 pr-2 pb-8 sm:pr-6 sm:pt-4 sm:pb-14">
          <span>{parsedData.maxY}</span>
          <span>{parsedData.minY}</span>
        </div>
        <div tw="flex-grow">
          <LineGraphContent parsedData={parsedData} />
          <div tw="flex flex-row justify-between px-2 sm:px-10 pt-3 sm:pt-8">
            <div>{parsedData.minX}</div>
            <div>
              {parsedData.minX + (parsedData.maxX - parsedData.minX) / 3}
            </div>
            <div>
              {parsedData.minX + (2 * (parsedData.maxX - parsedData.minX)) / 3}
            </div>
            <div>{parsedData.maxX}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineGraph
