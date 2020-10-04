import React, { useState } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import iconArrowBlack from "../svgs/icons/arrow-forward.svg"

import MineAlgorithm from "../components/pages/mine/algoritm"
import Wallet from "../components/shared/wallet"

import { PageContainer, BigText } from "../common/elements"

const MinePage = () => {
  const { t } = useTranslation()
  const [algoritm, changeAlgoritm] = useState("SHA256d")
  return (
    <>
      <SEO title={t("mine.title")} />
      <PageContainer tw="mb-16 sm:mb-24">
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("mine.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
        <MineAlgorithm
          title={t("mine.algoritm.title")}
          selected={algoritm}
          onChange={value => changeAlgoritm(value)}
        />
      </PageContainer>
      <div tw="bg-black">
        <PageContainer tw="py-40">
          <Wallet title={t("mine.wallet.title")} />
        </PageContainer>
      </div>
    </>
  )
}

export default MinePage
