import React from "react"
import tw from "twin.macro"

function LineGraphYAxis({ parsedData }) {
  return (
    <div tw="flex flex-row justify-between px-2 md:px-3 lg:px-5 xl:px-10 pt-3 sm:pt-8">
      <div>{parsedData.minX}</div>
      <div>{parsedData.minX + (parsedData.maxX - parsedData.minX) / 3}</div>
      <div>
        {parsedData.minX + (2 * (parsedData.maxX - parsedData.minX)) / 3}
      </div>
      <div>{parsedData.maxX}</div>
    </div>
  )
}

export default LineGraphYAxis
