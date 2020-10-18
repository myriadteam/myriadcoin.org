import React, { useState } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
import SEO from "../components/seo"
import MineAlgorithm from "../components/pages/mine/algoritm"
import Wallet from "../components/shared/wallet"
import Links from "../components/shared/links"
import BgImage from "../components/bg-image"

import iconArrowBlack from "../svgs/icons/arrow-forward.svg"
import iconArrowWhite from "../svgs/icons/arrow-forward-white.svg"

import {
  PageContainer,
  BigText,
  PurpleGrad,
  OrangeGrad,
} from "../common/elements"

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
      <div tw="bg-black relative">
        <Wallet title={t("mine.wallet.title")} />
      </div>
      <PageContainer tw="py-24 sm:py-48 px-6 sm:px-0">
        <BigText tw="mb-32">{t("mine.links.title")}</BigText>
        <Links skip={["mine"]} />
      </PageContainer>
      <BgImage filename="grad-1.png">
        <PageContainer tw="py-48 text-right text-white">
          <BigText tw="mb-24">{t("mine.need.title")}</BigText>
          <span tw="inline-flex">
            <Link
              to="/community"
              tw="underline text-4xl sm:text-7xl font-bold leading-extra-tight hover:text-black"
            >
              {t("mine.need.link")}
            </Link>
            <img src={iconArrowWhite} alt=">" tw="ml-4 text-white" />
          </span>
        </PageContainer>
      </BgImage>
    </>
  )
}

export default MinePage
