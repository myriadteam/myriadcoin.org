import React from "react"
import tw from "twin.macro"
import { animated } from "react-spring"

function LineGraphValues({ renderKeyValue, keys, colors, names, hoverValues }) {
  if (!keys || !keys.length) {
    return null
  }

  const renderContent = () => {
    const [{ xValue }] = hoverValues

    return keys.map((key, i) => (
      <div key={key} tw="flex-row whitespace-no-wrap">
        <div
          tw="h-2 w-2 rounded inline-block mr-1"
          style={{ backgroundColor: colors[i] }}
        />
        {names[key]}{" "}
        <animated.span tw="font-bold" style={{ color: colors[i] }}>
          {xValue.interpolate(renderKeyValue(key))}
        </animated.span>
      </div>
    ))
  }

  return renderContent()
}

LineGraphValues.propTypes = {}

LineGraphValues.defaultProps = {}

export default LineGraphValues
