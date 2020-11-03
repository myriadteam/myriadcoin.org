import React, { useState } from "react"
import tw from "twin.macro"
import { exchanges } from "../../common/exchanges"
import { MediumBoldText } from "../../common/elements"

const Exchanges = () => {
  const renderExchange = ({ name, logo, url }) => {
    return (
      <a
        href={url}
        tw="flex items-center justify-center rounded-full bg-light-grey w-full h-auto pt-full text-xs text-grey overflow-hidden m-4"
        title={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {logo && <img src={logo} alt={name} title={name} />}
      </a>
    )
  }
  return (
    <div tw="flex -mx-4">
      {exchanges.map(exchange => renderExchange(exchange))}
    </div>
  )
}

export default Exchanges
