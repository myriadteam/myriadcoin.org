import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"

import { PageContainer, BigText, BodyText } from "../common/elements"

const HoldPage = () => {
  return (
    <>
      <SEO title="404 - page not found" />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">404 - Page not found</BigText>
          <BodyText>
            Sorry but we could not find what you were looking for :(
          </BodyText>
        </div>
      </PageContainer>
    </>
  )
}

export default HoldPage
