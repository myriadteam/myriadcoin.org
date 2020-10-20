import React, { useState } from "react"
import tw, { css } from "twin.macro"
import ExchangeHelper from "../../common/exchange-helper"
import { MediumBoldText } from "../../common/elements"

const gradientTextStyle = css`
  background: -webkit-linear-gradient(-45deg, #28d8ff, #76eb9e, #42da64);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Price = () => {
  const [currentPrice, setCurrentPrice] = useState(null)
  const [todayStartPrice, setTodayStartPrice] = useState(null)
  const [difference, setDifference] = useState(0)

  const exchangeHelper = ExchangeHelper("XMY")

  const fetchHistoricPrice = () => {
    var timeStamp = new Date()
    timeStamp.setHours(0, 0, 0, 0)
    return exchangeHelper
      .fetchHistoricPrice("USD", timeStamp.getTime())
      .then(todayStartPrice => {
        console.log(todayStartPrice)
        setTodayStartPrice(todayStartPrice)
      })
  }

  const fetchCurrentPrice = () => {
    exchangeHelper.fetchCurrentPrice("USD").then(currentPrice => {
      let newDiff =
        ((parseFloat(currentPrice) - parseFloat(todayStartPrice)) /
          parseFloat(currentPrice)) *
        100

      let newDiffRounded = Math.round(newDiff * 100) / 100
      setDifference(newDiffRounded)
      setCurrentPrice(currentPrice)
    })
  }

  fetchHistoricPrice().then(() => {
    fetchCurrentPrice()
  })

  return (
    <div tw="flex flex-col">
      <MediumBoldText tw="mb-0" css={[gradientTextStyle]}>
        {currentPrice} USD
      </MediumBoldText>
      <MediumBoldText tw="text-grey">({difference}%)</MediumBoldText>
    </div>
  )
}

export default Price
