import React from "react"
import PropTypes from "prop-types"
import tw from "twin.macro"

const LineGraphContent = ({ parsedData }) => {
  const { svgLine } = parsedData

  return (
    <svg width={"100%"} viewBox="0 0 794 248" tw="overflow-visible">
      <path d={svgLine} fill="none" stroke={"#0066FF"} strokeWidth="2" />
    </svg>
  )
}

LineGraphContent.propTypes = {
  parsedData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default React.memo(LineGraphContent)
