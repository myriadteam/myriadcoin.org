import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

function LineGraphYAxis({ parsedData, renderValue, itemsCount }) {
  const renderContent = () => {
    return [...Array(itemsCount)].map((_, i) => {
      const value =
        parsedData.adjustedMinY +
        ((itemsCount - i - 1) *
          (parsedData.adjustedMaxY - parsedData.adjustedMinY)) /
          (itemsCount - 1)

      return <span key={i}>{renderValue(value)}</span>
    })
  }

  return (
    <div tw="flex flex-col justify-between pt-1 pr-2 pb-8 sm:pr-6 sm:pt-4 sm:pb-14">
      {renderContent()}
    </div>
  )
}

LineGraphYAxis.propTypes = {
  parsedData: PropTypes.shape().isRequired,
  renderValue: PropTypes.func.isRequired,
  itemsCount: PropTypes.number,
}

LineGraphYAxis.defaultProps = {
  itemsCount: 4,
}

export default LineGraphYAxis
