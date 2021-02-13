import React from "react"
import tw from "twin.macro"

import { useGraphZoomPan } from "./zoom-pan-context"
import Dropdown from "../dropdown"

import { GROUP_PERIODS } from "../../common/graph"

const LineGraphPeriods = ({ group }) => {
  const { setPeriod, startPeriod } = useGraphZoomPan()

  return (
    <Dropdown
      options={GROUP_PERIODS[group]}
      defaultValue={startPeriod}
      onChange={({ value }) => {
        setPeriod(parseInt(value, 10))
      }}
    />
  )
}

LineGraphPeriods.propTypes = {}

export default React.memo(LineGraphPeriods)
