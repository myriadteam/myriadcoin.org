import React from "react"
import tw from "twin.macro"

import { THREE_HOURS, SIX_HOURS, DAY, WEEK, MONTH } from "../../common/graph"
import Dropdown from "../dropdown"

const LABELS = {
  [THREE_HOURS]: "3 Hours",
  [SIX_HOURS]: "6 Hours",
  [DAY]: "Day",
  [WEEK]: "Week",
  [MONTH]: "Month",
}

function GroupingSelector({ options, group, onChange }) {
  const optionsMap = options.map(o => ({ label: LABELS[o], value: o }))
  return (
    <Dropdown
      options={optionsMap}
      defaultValue={group}
      onChange={({ value }) => {
        onChange(value)
      }}
    />
  )
}

export default React.memo(GroupingSelector)
