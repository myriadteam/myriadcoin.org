import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

function LineGraphXAxis({ parsedData, renderValue, itemsCount }) {
  const renderContent = () => {
    return [...Array(itemsCount)].map((_, i) => {
      const value =
        parsedData.minX +
        (i * (parsedData.maxX - parsedData.minX)) / (itemsCount - 1)

      return <span key={i}>{renderValue(value)}</span>
    })
  }

  return (
    <div tw="flex flex-row justify-between px-2 md:px-3 lg:px-5 xl:px-10 pt-3 sm:pt-8">
      {renderContent()}
    </div>
  )
}

LineGraphXAxis.propTypes = {
  parsedData: PropTypes.shape().isRequired,
  renderValue: PropTypes.func.isRequired,
  itemsCount: PropTypes.number,
}

LineGraphXAxis.defaultProps = {
  itemsCount: 4,
}

export default React.memo(LineGraphXAxis)
