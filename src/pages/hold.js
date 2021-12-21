import React from "react"
import { graphql } from "gatsby"
import tw from "twin.macro"
import SEO from "../components/seo"
import Wallet from "../components/shared/wallet"
import Links from "../components/shared/links"
import Price from "../components/shared/price"
import Exchanges from "../components/shared/exchanges"
import BgImage from "../components/bg-image"
import Cover from "../components/shared/cover"
import Link from "../components/shared/link"

import {
  PageContainer,
  BigText,
  MediumBoldText,
  BodyText,
} from "../common/elements"
import { useTranslation } from "react-i18next"

const HoldPage = ({ data }) => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("hold.title")} />
      <PageContainer>
        <Cover showArrow>{t("hold.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 ">
        <PageContainer tw="flex flex-col sm:flex-row">
          <div>
            <MediumBoldText>{t("hold.buy.title")}</MediumBoldText>
            <BodyText tw="mb-12">{t("hold.buy.body")}</BodyText>
            <Price />
          </div>
          <Exchanges />
        </PageContainer>
      </div>
      <div tw="bg-black relative">
        <PageContainer id="download">
          <Wallet data={data} title={t("hold.wallet.title")} />
        </PageContainer>
      </div>
      <hr tw="border-black border-opacity-25 dark:border-opacity-75" />
      <PageContainer tw="py-24 sm:py-30 px-6">
        <BigText tw="mb-32">{t("hold.links.title")}</BigText>
        <Links skip={["hold"]} />
      </PageContainer>
      <BgImage filename="grad-2.png">
        <PageContainer tw="py-24 px-6 sm:py-30  text-right text-white overflow-hidden">
          <BigText tw="mb-16 sm:mb-24 text-xl">{t("hold.fair.title")}</BigText>
          <Link
            uri="https://medium.com/myriadcoin/arent-all-cryptocurrencies-fairly-distributed-and-mined-70ec0f03bee9"
            tw="text-xl sm:text-2xl font-bold leading-extra-tight hover:text-black"
            showArrow
          >
            {t("hold.fair.link")}
          </Link>
        </PageContainer>
      </BgImage>
    </>
  )
}

export default HoldPage

export const query = graphql`
  query {
    macos: file(relativePath: { eq: "wallets/macos.png" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    android: file(relativePath: { eq: "wallets/android.png" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    ios: file(relativePath: { eq: "wallets/ios.png" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    default: file(relativePath: { eq: "wallets/default.png" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    windows: file(relativePath: { eq: "wallets/windows.png" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
