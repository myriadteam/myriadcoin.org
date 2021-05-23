import React from "react"
import tw, { css, styled } from "twin.macro"
import { useTranslation, Trans } from "react-i18next"
import BodyBlock from "../components/shared/body-block"
import SEO from "../components/seo"
import Links from "../components/shared/links"
import BgImage from "../components/bg-image"
import Cover from "../components/shared/cover"
import Link from "../components/shared/link"
import AlgoSHA265d from "../components/algoritms/sha256d"
import AlgoScrypt from "../components/algoritms/scrypt"
import AlgoMyrGroestl from "../components/algoritms/myr-groestl"
import AlgoYescrypt from "../components/algoritms/yescrypt"
import AlgoArgon2d from "../components/algoritms/argon2d"

import {
  PageContainer,
  BigText,
  MediumBoldText,
} from "../common/elements"

const AlgoButton = styled.a`
  ${tw`px-2 py-1 mx-2 whitespace-no-wrap transition duration-100 ease-in transform rounded-full text-xxs sm:px-4 sm:py-2 sm:text-xs hover:opacity-75 focus:outline-none`},
  ${tw`bg-light-grey dark:bg-dark-box text-grey`}
`

const MinePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("mine.title")} />
      <PageContainer>
        <Cover showArrow>{t("mine.title")}</Cover>
      </PageContainer>

      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 ">
        <PageContainer>
          <BodyBlock translationKey="mine.software_and_pools" />
        </PageContainer>
      </div>

      <PageContainer tw="py-24 sm:py-30 px-6">
        <MediumBoldText tw="mb-10">
          {t("mine.available_algorithms")}
        </MediumBoldText>
        <div tw="flex -mx-2">
          <AlgoButton href="#SHA256d">
            {t("algoritms.SHA256d.label")}
          </AlgoButton>
          <AlgoButton href="#scrypt">{t("algoritms.scrypt.label")}</AlgoButton>
          <AlgoButton href="#myr-groestl">
            {t("algoritms.myr-groestl.label")}
          </AlgoButton>
          <AlgoButton href="#argon2d">
            {t("algoritms.argon2d.label")}
          </AlgoButton>
          <AlgoButton href="#yescrypt">
            {t("algoritms.yescrypt.label")}
          </AlgoButton>
        </div>
        <AlgoSHA265d />
        <AlgoScrypt />
        <AlgoMyrGroestl />
        <AlgoArgon2d />
        <AlgoYescrypt />
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
