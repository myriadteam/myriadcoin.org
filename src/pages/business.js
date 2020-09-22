import React, { useState } from "react"
import tw from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import Layout from "../components/layout"
import SEO from "../components/seo"
import iconArrowBlack from "../images/icons/arrow-forward.svg"

import { PageContainer, BigText } from "../common/elements"

const BusinessPage = ({ t, i18n }) => {
  return (
    <Layout>
      <SEO title={t("business.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("business.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
    </Layout>
  )
}

export default withTrans(BusinessPage)
