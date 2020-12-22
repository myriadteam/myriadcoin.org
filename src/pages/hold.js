import React, { useState } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import SEO from "../components/seo"
import Wallet from "../components/shared/wallet"
import Links from "../components/shared/links"
import Price from "../components/shared/price"
import Exchanges from "../components/shared/exchanges"
import BgImage from "../components/bg-image"

import iconArrowBlack from "../svgs/icons/arrow-forward.svg"
import iconArrowWhite from "../svgs/icons/arrow-forward-white.svg"

import {
  PageContainer,
  BigText,
  MediumBoldText,
  BodyText,
  LinkButton,
} from "../common/elements"
import { useTranslation } from "react-i18next"

const HoldPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("hold.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("hold.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
      <div tw="bg-light-grey py-24 px-6 sm:py-30 sm:px-0">
        <PageContainer tw="flex flex-col sm:flex-row">
          <div tw="">
            <MediumBoldText>{t("hold.buy.title")}</MediumBoldText>
            <BodyText tw="mb-12">{t("hold.buy.body")}</BodyText>
            <Price />
          </div>
          <Exchanges />
        </PageContainer>
      </div>
      <div tw="bg-black relative">
        <PageContainer>
          <Wallet title={t("hold.wallet.title")} />
        </PageContainer>
      </div>
      <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
        <MediumBoldText>{t("hold.use.title")}</MediumBoldText>
        <BodyText tw="mb-12">{t("hold.use.body")}</BodyText>
        <LinkButton href="XXXX">{t("hold.use.link")}</LinkButton>
      </PageContainer>
      <hr />
      <PageContainer tw="py-24 sm:py-48 px-6 sm:px-0">
        <BigText tw="mb-32">{t("hold.links.title")}</BigText>
        <Links skip={["hold"]} />
      </PageContainer>
      <BgImage filename="grad-2.png">
        <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0 text-right text-white">
          <BigText tw="mb-16 sm:mb-24">{t("hold.fair.title")}</BigText>
          <span tw="inline-flex">
            <Link
              to="/about"
              tw="underline text-xl sm:text-2xl font-bold leading-extra-tight hover:text-black"
            >
              {t("hold.fair.link")}
            </Link>
            <img src={iconArrowWhite} alt=">" tw="ml-4 text-white" />
          </span>
        </PageContainer>
      </BgImage>
    </>
  )
}

export default HoldPage
