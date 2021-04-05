import React, { useState } from "react"
import tw, { css } from "twin.macro"
import { useTranslation, Trans } from "react-i18next"
import SEO from "../components/seo"
import MineAlgorithm from "../components/pages/mine/algoritm"
import MinePool from "../components/pages/mine/pool"
import Wallet from "../components/shared/wallet"
import Links from "../components/shared/links"
import BgImage from "../components/bg-image"
import Cover from "../components/shared/cover"
import Link from "../components/shared/link"

import { PageContainer, BigText } from "../common/elements"

const gradientTextStyle = css`
  background: -webkit-linear-gradient(60deg, #ffd17f, #ff5aa9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MinePage = () => {
  const { t } = useTranslation()
  const [algoritm, changeAlgoritm] = useState("SHA256d")
  return (
    <>
      <SEO title={t("mine.title")} />
      <PageContainer>
        <Cover showArrow>{t("mine.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 ">
        <PageContainer>
          <MineAlgorithm
            title={t("mine.algoritm.title")}
            selected={algoritm}
            onChange={value => changeAlgoritm(value)}
          />
        </PageContainer>
      </div>
      <div tw="bg-black relative">
        <PageContainer>
          <Wallet title={t("mine.wallet.title")} />
        </PageContainer>
      </div>
      <PageContainer tw="py-24 sm:py-30 px-6">
        <MinePool selected={algoritm} />
      </PageContainer>
      <PageContainer tw="pb-24 sm:pb-43 px-6">
        <BigText tw="text-orange sm:px-32" css={[gradientTextStyle]}>
          {t("mine.ready")}
        </BigText>
      </PageContainer>
      <hr tw="border-black border-opacity-25 dark:border-opacity-75" />
      <PageContainer tw="py-24 sm:py-30 px-6">
        <BigText tw="mb-32">{t("mine.links.title")}</BigText>
        <Links skip={["mine"]} />
      </PageContainer>
      <BgImage filename="grad-1.png">
        <PageContainer tw="py-24 px-6 sm:py-30  text-right text-white overflow-hidden">
          <BigText tw="mb-16 sm:mb-24">
            <Trans i18nKey="mine.need.title">
              Is there a need for
              <br />
              cryptocurrencies
            </Trans>
          </BigText>
          <Link
            uri="#community"
            tw="text-xl sm:text-2xl font-bold leading-extra-tight hover:text-black"
            showArrow
          >
            {t("mine.need.link")}
          </Link>
        </PageContainer>
      </BgImage>
    </>
  )
}

export default MinePage
