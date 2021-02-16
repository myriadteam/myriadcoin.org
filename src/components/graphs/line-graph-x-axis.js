import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { animated, interpolate } from "react-spring"
import { useGraphZoomPan } from "./zoom-pan-context"

function LineGraphXAxis({ renderValue, itemsCount }) {
  const { offsetX, period } = useGraphZoomPan()

  const renderContent = () => {
    if (!itemsCount) {
      return <span>&nbsp;</span>
    }

    return [...Array(itemsCount)].map((_, i) => {
      const interpolatedValue = interpolate(
        [offsetX, period],
        (offsetX, period) => {
          const value = offsetX + (i * period) / (itemsCount - 1)

          return renderValue(value)
        }
      )

      return <animated.span key={i}>{interpolatedValue}</animated.span>
    })
  }

  return (
    <div tw="flex flex-row justify-between px-1 pt-2 sm:pt-4">
      {renderContent()}
    </div>
  )
}

LineGraphXAxis.propTypes = {
  renderValue: PropTypes.func.isRequired,
  itemsCount: PropTypes.number,
}

LineGraphXAxis.defaultProps = {
  itemsCount: 0,
}

export default React.memo(LineGraphXAxis)
