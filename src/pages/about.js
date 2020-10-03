import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import iconArrowBlack from "../images/icons/arrow-forward.svg"

import { PageContainer, BigText } from "../common/elements"
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("about.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("about.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
    </>
  )
}

export default AboutPage
