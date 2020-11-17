import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import iconArrowBlack from "../svgs/icons/arrow-forward.svg"

import {
  PageContainer,
  BigText,
  MediumBoldText,
  BodyText,
} from "../common/elements"
import { useTranslation, Trans } from "react-i18next"

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
      <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
        <div tw="max-w-2xl">
          <MediumBoldText>{t("about.top.title")}</MediumBoldText>
          <Trans
            i18nKey="about.top.body"
            components={[<BodyText tw="mb-6" />]}
          />
        </div>
      </PageContainer>
    </>
  )
}

export default AboutPage
