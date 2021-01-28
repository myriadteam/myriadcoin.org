import React from "react"
import tw from "twin.macro"

function LineGraphYAxis({ parsedData, renderValue }) {
  return (
    <div tw="flex flex-col justify-between pt-1 pr-2 pb-8 sm:pr-6 sm:pt-4 sm:pb-14">
      <span>{renderValue(parsedData.adjustedMaxY)}</span>
      <span>{renderValue(parsedData.adjustedMinY)}</span>
    </div>
  )
}

export default LineGraphYAxis
