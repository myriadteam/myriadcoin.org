import React, { useContext } from "react"
import tw, { css } from "twin.macro"
import { MediumBoldText } from "../../common/elements"
import {
  gradientTextStyleGreenBlue,
  gradientTextStylePink,
} from "../../common/gradients"
import XmyDataContext from "../../contexts/xmy-data-context.js"

const Price = () => {
  const {
    USD: { opening, current },
  } = useContext(XmyDataContext)

  let difference =
    ((parseFloat(current) - parseFloat(opening)) / parseFloat(current)) * 100

  let differenceRounded = Math.round(difference * 100) / 100

  return (
    <div tw="flex flex-col">
      <MediumBoldText
        tw="mb-0"
        css={[
          differenceRounded >= 0
            ? gradientTextStyleGreenBlue
            : gradientTextStylePink,
        ]}
      >
        {current} USD
      </MediumBoldText>
      <MediumBoldText tw="text-grey mb-0">
        ({differenceRounded}%)
      </MediumBoldText>
    </div>
  )
}

export default Price
