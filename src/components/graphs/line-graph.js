import React, { useEffect, useState, useMemo } from "react"
import LineGraphContent from "./line-graph-content"
import tw from "twin.macro"

import { MediumBoldText } from "../../common/elements"
import { parseDataForLineGraph } from "../../common/graph"

function LineGraph() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const sizes = await fetch(
        "https://xmy-history.coinid.org/latestblocks/100/weight.json"
      ).then(r => r.json())

      const newData = sizes.map((v, i) => ({ x: i, y: v }))
      setData(newData)
    }

    getData()
  }, [])

  const parsedData = useMemo(() => parseDataForLineGraph(data, 794, 248), [
    data,
  ])

  return (
    <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-16 sm:py-18 rounded">
      <MediumBoldText>Block weights</MediumBoldText>
      <div tw="flex flex-row text-grey font-normal">
        <div tw="flex flex-col justify-between pt-1 pr-2 pb-8 sm:pr-6 sm:pt-4 sm:pb-14">
          <div>{parsedData.maxY}</div>
          <div>{parsedData.minY}</div>
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
