import React, { useContext } from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import XmyDataContext from "../contexts/xmy-data-context.js"
import BodyBlock from "../components/shared/body-block"
import Cover from "../components/shared/cover"
import DailyBlocksMinedGraph from "../components/graphs/daily-blocks-mined-graph"

import {
  gradientTextStylePurple,
  gradientTextStylePink,
  gradientTextStyleGreen,
  gradientTextStyleBlue,
} from "../common/gradients"

import {
  PageContainer,
  MediumBoldText,
  BodyText,
  BodyBoldText,
} from "../common/elements"
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation()
  const {
    blocks,
    circulatingSupply,
    blockCountLast24Hour,
    coinsPerBlock,
  } = useContext(XmyDataContext)

  const historyItems = t("about.history.items", { returnObjects: true })
  const distributionItems = t("about.specifications.distribution.items", {
    returnObjects: true,
  })

  const featuresItems = t("about.specifications.features.items", {
    returnObjects: true,
  })

  const yearsInDevelopment = Math.round(
    (new Date() - 1393164995000) / 1000 / 60 / 60 / 24 / 365.24
  ) // 1393164995 = genesis block

  return (
    <>
      <SEO title={t("about.title")} />
      <PageContainer>
        <Cover showArrow>{t("about.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 overflow-hidden">
        <PageContainer>
          <BodyBlock translationKey="about.top" />
          <div tw="flex sm:flex-wrap flex-col sm:flex-row mb-24">
            <div tw="w-full sm:w-half mb-10">
              <span
                tw="text-2xl md:text-3xl lg:text-4xl leading-none font-bold"
                css={[gradientTextStylePurple]}
              >
                {yearsInDevelopment}
              </span>
              <BodyText>{t("about.stats.years")}</BodyText>
            </div>
            <div tw="w-full sm:w-half mb-10">
              <span
                tw="text-2xl md:text-3xl lg:text-4xl leading-none font-bold"
                css={[gradientTextStyleGreen]}
              >
                {t("formattedNumber", { number: blocks })}
              </span>
              <BodyText>{t("about.stats.blocks")}</BodyText>
            </div>
            <div tw="w-full sm:w-half mb-10 sm:mb-0">
              <span
                tw="text-2xl md:text-3xl lg:text-4xl leading-none font-bold"
                css={[gradientTextStylePink]}
              >
                {t("formattedNumber", { number: blockCountLast24Hour })}
              </span>
              <BodyText>{t("about.stats.blocks_last_24hours")}</BodyText>
            </div>
            <div tw="w-full sm:w-half">
              <span
                tw="text-2xl md:text-3xl lg:text-4xl leading-none font-bold"
                css={[gradientTextStyleBlue]}
              >
                {t("percentage", {
                  number:
                    (100 * blockCountLast24Hour * coinsPerBlock * 365) /
                    circulatingSupply,
                })}
                %
              </span>
              <BodyText>{t("about.stats.inflation_rate")}</BodyText>
            </div>
          </div>

          <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <MediumBoldText>Daily blocks mined</MediumBoldText>
            <DailyBlocksMinedGraph />
          </div>
        </PageContainer>
      </div>
      <div tw="bg-black text-white">
        <PageContainer tw="py-24 px-6 sm:py-30 ">
          <MediumBoldText tw="mb-24">{t("about.history.title")}</MediumBoldText>

          <div tw="flex flex-col sm:-mx-8">
            {historyItems.map((item, index) => (
              <div
                key={`history-${index}`}
                tw="mb-16 sm:mb-10 sm:max-w-2xl items-stretch justify-center sm:even:self-end sm:even:text-right flex flex-col sm:flex-row sm:even:flex-row-reverse"
              >
                <div tw="rounded-full w-full h-4 sm:h-auto sm:w-8 bg-gradient-to-r sm:bg-gradient-to-b from-blue-light flex-shrink-0 sm:mx-8 mb-8 sm:mb-0" />
                <div>
                  <BodyBoldText tw="mb-5 leading-none">
                    {item.date}
                  </BodyBoldText>
                  <BodyText>{item.text}</BodyText>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </div>
      <PageContainer tw="py-24 px-6 sm:py-30 ">
        <BodyBlock translationKey="about.community" />
        <BodyBlock translationKey="about.fair" />
      </PageContainer>
      <div
        tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 "
        id="specifications"
      >
        <PageContainer>
          <MediumBoldText tw="mb-10">
            {t("about.specifications.title")}
          </MediumBoldText>
          <div tw="sm:grid sm:grid-cols-2">
            <div tw="mb-20 sm:mb-0">
              <BodyBoldText tw="mb-8">
                {t("about.specifications.distribution.title")}
              </BodyBoldText>
              {distributionItems.map((item, index) => (
                <div key={`dist-item-${index}`} tw="mb-8 last:mb-0">
                  <BodyText>{item.title}:</BodyText>
                  <BodyBoldText>{item.value}</BodyBoldText>
                </div>
              ))}
            </div>
            <div>
              <BodyBoldText tw="mb-8">
                {t("about.specifications.features.title")}
              </BodyBoldText>
              {featuresItems.map((item, index) => (
                <div key={`dist-item-${index}`} tw="mb-8 last:mb-0">
                  <BodyText>{item.title}:</BodyText>
                  <BodyBoldText>{item.value}</BodyBoldText>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  )
}

export default AboutPage
