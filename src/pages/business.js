import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import IconArrowBlack from "../svgs/icons/arrow-forward.inline.svg"

import { PageContainer, BigText } from "../common/elements"
import { useTranslation } from "react-i18next"

const BusinessPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("business.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("business.title")}</BigText>
          <IconArrowBlack alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
    </>
  )
}

export default BusinessPage
