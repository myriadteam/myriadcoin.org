import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { exchanges } from "../../common/exchanges"
import IconLitebit from "../../svgs/icons/litebit.inline.svg"
import IconBittrex from "../../svgs/icons/bittrex.inline.svg"
import IconBitladon from "../../svgs/icons/bitladon.inline.svg"
import IconNetcoins from "../../svgs/icons/netcoins.inline.svg"
import IconDoveWallet from "../../svgs/icons/dove-wallet.inline.svg"

const ExchangeLink = styled.a`
  ${tw`flex items-center justify-center p-3 overflow-hidden text-white transition duration-100 ease-in rounded-full w-18 h-18 text-xxs hover:bg-black`}
  ${({ nr }) => {
    if (nr === 0) return tw`bg-exchanges-0`
    if (nr === 1) return tw`bg-exchanges-1`
    if (nr === 2) return tw`bg-exchanges-2`
    if (nr === 3) return tw`bg-exchanges-3`
    if (nr === 4) return tw`bg-exchanges-4`
  }}
`

const Exchanges = () => {
  const renderExchange = ({ name, logo, url }, index) => {
    return (
      <div
        tw="flex items-center justify-center flex-grow-0 flex-shrink-0 w-22 h-22"
        key={`exchange-${index}`}
      >
        <ExchangeLink
          href={url}
          title={name}
          target="_blank"
          rel="noopener noreferrer"
          nr={index}
        >
          {name === "Litebit" && <IconLitebit />}
          {name === "Bittrex" && <IconBittrex />}
          {name === "Bitladon" && <IconBitladon />}
          {name === "Netcoins" && <IconNetcoins />}
          {name === "Dove Wallet" && <IconDoveWallet />}
        </ExchangeLink>
      </div>
    )
  }
  return (
    <div tw="mt-10 sm:mt-0 rounded-lg shadow-wide flex-shrink-0 sm:ml-16 bg-white grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-4 p-6">
      {exchanges.map((exchange, index) => renderExchange(exchange, index))}
    </div>
  )
}

export default Exchanges
