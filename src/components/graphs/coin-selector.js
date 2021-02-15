import React from "react"
import tw from "twin.macro"

import { algoNames, algoColors } from "../../common/graph"

function GroupingSelector({ options, onChange }) {
  return (
    <div>
      {options.map(val => {
        return (
          <button
            key={val}
            tw="rounded-full px-6 py-4 mr-6 text-md leading-extra-tight"
            style={{ backgroundColor: algoColors[val] }}
            onClick={() => onChange(val)}
          >
            {algoNames[val]}
          </button>
        )
      })}
    </div>
  )
}

export default React.memo(GroupingSelector)
