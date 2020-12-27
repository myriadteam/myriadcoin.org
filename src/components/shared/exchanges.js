import React, { useState } from "react"
import tw from "twin.macro"
import { exchanges } from "../../common/exchanges"
import { MediumBoldText } from "../../common/elements"

const Exchanges = () => {
  const renderExchange = ({ name, logo, url }, index) => {
    return (
      <div tw="flex items-center justify-center" key={`exchange-${index}`}>
        <a
          href={url}
          tw="rounded-full bg-light-grey w-18 h-18 flex justify-center items-center text-xxs text-grey overflow-hidden p-3"
          title={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {logo && <img src={logo} alt={name} title={name} tw="w-4/5 h-auto" />}
        </a>
      </div>
    )
  }
  return (
    <div tw="rounded shadow-wide flex-shrink-0 sm:ml-16 bg-white grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-4 px-6 py-8">
      {exchanges.map((exchange, index) => renderExchange(exchange, index))}
    </div>
  )
}

export default Exchanges
