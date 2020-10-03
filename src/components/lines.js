import React from "react"
import tw from "twin.macro"

import one from "../svgs/lines/1.svg"
import two from "../svgs/lines/2.svg"
import three from "../svgs/lines/3.svg"
import four from "../svgs/lines/4.svg"
import five from "../svgs/lines/5.svg"
const Container = tw.div`absolute inset-0`

const Lines = ({ className }) => {
  return (
    <Container className={className}>
      <img src={one} alt="One line" tw="absolute top-0" />
      <img src={two} alt="One line" tw="absolute bottom-40" />
      <img src={three} alt="One line" tw="absolute bottom-12 right-0" />
      <img src={four} alt="One line" tw="absolute bottom-0 right-0" />
      <img src={five} alt="One line" tw="absolute -bottom-24" />
    </Container>
  )
}

export default Lines
