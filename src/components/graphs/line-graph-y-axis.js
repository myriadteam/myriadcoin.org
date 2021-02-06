import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { animated, interpolate } from "react-spring"

import { useGraphZoomPan } from "./zoom-pan-context"

function LineGraphYAxis({ renderValue, itemsCount }) {
  const { lowestInView, highestInView } = useGraphZoomPan()

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
    <div tw="flex flex-col justify-between pt-1 pr-2 pb-8 sm:pr-6 sm:pt-4 sm:pb-14">
      {renderContent()}
    </div>
  )
}

LineGraphYAxis.propTypes = {
  renderValue: PropTypes.func.isRequired,
  itemsCount: PropTypes.number,
}

LineGraphYAxis.defaultProps = {
  itemsCount: 4,
}

export default LineGraphYAxis
