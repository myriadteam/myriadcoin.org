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

          return value ? renderValue(value) : "\xa0"
        }
      )

      return <animated.span key={i}>{interpolatedValue}</animated.span>
    })
  }

  return (
    <div
      tw="relative mr-1 h-full flex flex-col justify-between"
      style={{ height: boxHeight }}
    >
      {renderContent()}
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
