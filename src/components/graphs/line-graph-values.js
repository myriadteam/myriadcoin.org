import React from "react"
import tw from "twin.macro"
import { animated } from "react-spring"

function LineGraphValues({ renderKeyValue, keys, colors, names, hoverValues }) {
  const [{ xValue }] = hoverValues

  return (
    <div tw="flex flex-wrap mt-4">
      {keys.map((key, i) => (
        <div key={key} tw="flex-row mr-6 text-xxs">
          <div tw="text-sm mb-1 flex flex-row justify-center items-center">
            <div
              tw="h-4 w-4 bg-blue-graph border-2 border-solid border-white dark:border-dark-bg rounded flex items-center justify-center mr-1"
              style={{ backgroundColor: colors[i] }}
            />
            {names[key]}
          </div>
          <div
            tw="inline-flex rounded-14 px-2 text-white text-xxs leading-lg whitespace-no-wrap dark:text-black"
            style={{ backgroundColor: colors[i] }}
          >
            <animated.span>
              {xValue.interpolate(renderKeyValue(key))}
            </animated.span>
          </div>
        </div>
      ))}
    </div>
  )
}

LineGraphValues.propTypes = {}

LineGraphValues.defaultProps = {}

export default LineGraphValues
