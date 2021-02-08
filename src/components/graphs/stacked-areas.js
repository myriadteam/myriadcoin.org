import React from "react"

const StackedAreas = ({ stackAreas, stackColors }) => {
  return stackAreas.map((area, i) => <path d={area} fill={stackColors[i]} />)
}

export default React.memo(StackedAreas)
