import React from "react"
import tw from "twin.macro"

import one from "../images/lines/1.svg"
import two from "../images/lines/2.svg"
import three from "../images/lines/3.svg"
import four from "../images/lines/4.svg"
import five from "../images/lines/5.svg"
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
