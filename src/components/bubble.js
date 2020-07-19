import React from "react"
import tw from "twin.macro"

const Container = tw.div`inline-flex rounded-full py-6 px-12 bg-gradient-t-black-grey text-white text-3xl font-semibold leading-extra-tight`

const Bubble = ({ children, className }) => {
  return <Container className={className}>{children}</Container>
}

export default Bubble
