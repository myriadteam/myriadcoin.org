import React from "react"
import tw, { styled } from "twin.macro"

import SymbolTrusted from "../svgs/icons/symbol-trusted.inline.svg"
import SymbolFair from "../svgs/icons/symbol-fair.inline.svg"
import SymbolCommunity from "../svgs/icons/symbol-community.inline.svg"

import controlRaster from "../images/symbol-control.png"

const SymbolControl = () => {
  return (
    <div tw="w-40 h-40 items-center justify-center flex">
      <img src={controlRaster} alt="Gradient" width="50%" height="50%" />
    </div>
  )
}

const symbols = {
  trusted: SymbolTrusted,
  fair: SymbolFair,
  community: SymbolCommunity,
  control: SymbolControl,
}

const Container = styled.div`
  ${tw`flex flex-shrink-0 flex-grow bg-white dark:bg-dark-box w-24 h-24 sm:w-48 sm:h-48 rounded-lg justify-center items-center shadow-wide`}
  ${({ left }) => left && tw`mr-6 sm:mr-12`}
  ${({ right }) => right && tw`ml-6 sm:ml-12`}
  ${({ alternate }) => alternate && tw`dark:bg-dark-bg`}
`

const SymbolBox = ({ symbol, left, right, alternate }) => {
  const Component = symbols[symbol]
  return (
    <Container left={left} right={right} alternate={alternate}>
      <Component />
    </Container>
  )
}

export default React.memo(SymbolBox)
