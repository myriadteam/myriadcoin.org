import React, { useState } from "react"
import tw from "twin.macro"
import { exchanges } from "../../common/exchanges"
import { MediumBoldText } from "../../common/elements"

const Exchanges = () => {
  const renderExchange = ({ name, logo, url }) => {
    return (
      <a
        href={url}
        tw="rounded-full bg-light-grey w-24 h-24 flex justify-center items-center text-xxs text-grey overflow-hidden p-2"
        title={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {logo && <img src={logo} alt={name} title={name} tw="rounded-full" />}
      </a>
    )
  }
  return (
    <div tw="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-5">
      {exchanges.map(exchange => renderExchange(exchange))}
    </div>
  )
}

export default Exchanges
