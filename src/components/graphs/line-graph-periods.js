import React from "react"
import tw from "twin.macro"

import { useGraphZoomPan } from "./zoom-pan-context"

const LineGraphPeriods = () => {
  const { setPeriod, startPeriod } = useGraphZoomPan()

  return (
    <select
      onChange={event => {
        setPeriod(parseInt(event.target.value, 10))
      }}
      defaultValue={startPeriod}
    >
      <option value="365">Year</option>
      <option value="182">6 Months</option>
      <option value="90">Quarter</option>
      <option value="30">Month</option>
      <option value="7">Week</option>
    </select>
  )
}

LineGraphPeriods.propTypes = {}

export default React.memo(LineGraphPeriods)
