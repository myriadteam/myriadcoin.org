import React from "react"
import tw from "twin.macro"
import IconLaptop from "../svgs/icons/laptop.svg"
import IconPools from "../svgs/icons/pools.svg"

const symbols = {
  laptop: IconLaptop,
  pools: IconPools,
}

const BoxedIcon = ({ symbol }) => {
  const icon = symbols[symbol]
  return (
    <span tw="mr-3 h-8 w-8 rounded-11 bg-icon-grey flex items-center justify-center">
      <img src={icon} alt={symbol} tw="w-6 h-6" />
    </span>
  )
}

export default React.memo(BoxedIcon)
