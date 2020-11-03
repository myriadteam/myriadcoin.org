import React from "react"
import tw, { styled } from "twin.macro"

const Container = styled.div`
  ${tw`inline-flex rounded-full py-4 px-8 text-white text-sm font-semibold leading-extra-tight sm:(py-6 px-12 text-md)`}
  ${({ color }) =>
    color === "blue" ? tw`bg-bubble-blue` : tw`bg-gradient-t-black-grey`}
`

const Bubble = ({ children, className, color }) => {
  return (
    <Container className={className} color={color}>
      {children}
    </Container>
  )
}

export default Bubble
