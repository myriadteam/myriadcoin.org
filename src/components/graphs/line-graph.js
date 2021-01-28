import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import LineGraphContent from "./line-graph-content"
import LineGraphXAxis from "./line-graph-x-axis"
import LineGraphYAxis from "./line-graph-y-axis"
import LineGraphMouse from "./line-graph-mouse"

import { MediumBoldText } from "../../common/elements"
import { parseDataForLineGraph } from "../../common/graph"

function LineGraph() {
  const [parsedData, setParsedData] = useState(null)

  const viewportWidth = 794
  const viewportHeight = 248

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

      setParsedData(
        parseDataForLineGraph(newData, viewportWidth, viewportHeight, 0.0)
      )
    }

    getData()
  }, [])

  if (!parsedData) {
    return null
  }

  return (
    <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
      <MediumBoldText>Block weights</MediumBoldText>
      <div tw=" flex text-grey font-normal text-xxxs sm:text-xxs md:text-sm lg:text-base">
        <LineGraphYAxis parsedData={parsedData} />
        <div tw="flex-grow">
          <div tw="relative">
            <LineGraphContent parsedData={parsedData} />
            <LineGraphMouse parsedData={parsedData} />
          </div>
          <LineGraphXAxis parsedData={parsedData} />
        </div>
      </div>
    </div>
  )
}

export default LineGraph
