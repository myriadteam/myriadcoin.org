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
import { useTranslation } from "react-i18next"

const CommunityPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("community.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("community.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
      <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
        <div tw="max-w-2xl">
          <MediumBoldText>{t("community.top.title")}</MediumBoldText>
          <BodyText>{t("community.top.body")}</BodyText>
        </div>
      </PageContainer>
      <div tw="bg-light-grey">
        <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
          <div tw="max-w-2xl">
            <MediumBoldText>{t("community.social_media.title")}</MediumBoldText>
            <BodyText>{t("community.social_media.body")}</BodyText>
          </div>
        </PageContainer>
      </div>
    </>
  )
}

export default CommunityPage
