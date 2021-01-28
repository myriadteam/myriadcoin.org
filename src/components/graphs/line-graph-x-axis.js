import React from "react"
import tw from "twin.macro"

function LineGraphYAxis({ parsedData, renderValue }) {
  const itemCount = 4

  const renderContent = () => {
    return [...Array(itemCount)].map((_, i) => {
      const value =
        parsedData.minX +
        (i * (parsedData.maxX - parsedData.minX)) / (itemCount - 1)

      return <div>{renderValue(value)}</div>
    })
  }

  return (
    <div tw="flex flex-row justify-between px-2 md:px-3 lg:px-5 xl:px-10 pt-3 sm:pt-8">
      {renderContent()}
    </div>
  )
}

export default LineGraphYAxis
