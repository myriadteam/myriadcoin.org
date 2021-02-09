import React from "react"
import tw from "twin.macro"

import { useGraphZoomPan } from "./zoom-pan-context"
import Dropdown from "../dropdown"

const LineGraphPeriods = () => {
  const { setPeriod, startPeriod } = useGraphZoomPan()

  return (
    <Dropdown
      options={[
        { value: 365, label: "Year" },
        { value: 182, label: "6 Months" },
        { value: 90, label: "Quarter" },
        { value: 30, label: "Month" },
        { value: 7, label: "Week" },
      ]}
      defaultValue={startPeriod}
      onChange={({ value }) => {
        setPeriod(parseInt(value, 10))
      }}
    />
  )
}

LineGraphPeriods.propTypes = {}

export default React.memo(LineGraphPeriods)
