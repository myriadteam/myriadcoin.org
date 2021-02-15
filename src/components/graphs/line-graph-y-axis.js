import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { animated, interpolate } from "react-spring"

import { useGraphZoomPan } from "./zoom-pan-context"

function LineGraphYAxis({ renderValue, itemsCount }) {
  const { lowestInView, highestInView, boxHeight } = useGraphZoomPan()

  const renderContent = () => {
    return [...Array(itemsCount)].map((_, i) => {
      const interpolatedValue = interpolate(
        [lowestInView, highestInView],
        (lowestInView, highestInView) => {
          const value =
            lowestInView +
            ((itemsCount - i - 1) * (highestInView - lowestInView)) /
              (itemsCount - 1)

          return renderValue(value)
        }
      )

      return <animated.span key={i}>{interpolatedValue}</animated.span>
    })
  }

  return (
    <div
      tw="relative py-1 pr-2 sm:pr-6 sm:py-4 w-8 sm:w-18 h-full"
      style={{ height: boxHeight }}
    >
      <div tw="flex flex-col justify-between absolute inset-0">
        {renderContent()}
      </div>
    </div>
  )
}

LineGraphYAxis.propTypes = {
  renderValue: PropTypes.func.isRequired,
  itemsCount: PropTypes.number,
}

LineGraphYAxis.defaultProps = {
  itemsCount: 0,
}

export default React.memo(LineGraphYAxis)
