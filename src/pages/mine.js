import React, { useState } from "react"
import tw from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import Layout from "../components/layout"
import SEO from "../components/seo"
import iconArrowBlack from "../images/icons/arrow-forward.svg"

import MineAlgorithm from "../components/pages/mine/algorithm"

import { PageContainer, BigText, MediumBoldText } from "../common/elements"

const MinePage = ({ t, i18n }) => {
  const [algoritm, changeAlgoritm] = useState(null)
  return (
    <Layout>
      <SEO title={t("mine.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("mine.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
        <MineAlgorithm
          selected={algoritm}
          onChange={value => changeAlgoritm(value)}
        />
      </PageContainer>
    </Layout>
  )
}

export default withTrans(MinePage)
