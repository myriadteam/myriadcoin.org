import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"

import { PageContainer, BigText, BodyText } from "../common/elements"

const HoldPage = () => {
  return (
    <>
      <SEO title="404 - page not found" />
      <PageContainer>
        <div tw="h-112 -mt-24 sm:h-176 sm:-mt-32 flex items-center px-6">
          <div tw="relative">
            <BigText>404 - Page not found</BigText>
            <BodyText>
              Sorry but we could not find what you were looking for :(
            </BodyText>
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default HoldPage
