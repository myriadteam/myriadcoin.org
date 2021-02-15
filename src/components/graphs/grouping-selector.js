import React from "react"
import tw from "twin.macro"

import { THREE_HOURS, SIX_HOURS, DAY, WEEK, MONTH } from "../../common/graph"

const LABELS = {
  [THREE_HOURS]: "3 Hours",
  [SIX_HOURS]: "6 Hours",
  [DAY]: "Day",
  [WEEK]: "Week",
  [MONTH]: "Month",
}

function GroupingSelector({ options, onChange }) {
  return (
    <div tw="text-right">
      <span>Grouping: </span>
      {options.map(val => {
        return (
          <button key={val} tw="mr-1" onClick={() => onChange(val)}>
            {LABELS[val]}
          </button>
        )
      })}
    </div>
  )
}

export default React.memo(GroupingSelector)
