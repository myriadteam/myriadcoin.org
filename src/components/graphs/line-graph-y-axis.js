import React from "react"
import tw from "twin.macro"

function LineGraphYAxis({ parsedData }) {
  return (
    <div tw="flex flex-col justify-between pt-1 pr-2 pb-8 sm:pr-6 sm:pt-4 sm:pb-14">
      <span>{(parsedData.maxY / 1000).toFixed(1)}K</span>
      <span>{(parsedData.minY / 1000).toFixed(1)}K</span>
    </div>
  )
}

export default LineGraphYAxis
