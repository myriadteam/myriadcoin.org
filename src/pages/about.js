import React, { useContext } from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import XmyDataContext from "../contexts/xmy-data-context.js"
import BodyBlock from "../components/shared/body-block"
import iconArrowBlack from "../svgs/icons/arrow-forward.svg"
import {
  gradientTextStylePurple,
  gradientTextStylePink,
  gradientTextStyleGreen,
  gradientTextStyleBlue,
} from "../common/gradients"

import {
  PageContainer,
  BigText,
  MediumBoldText,
  BodyText,
  BodyBoldText,
} from "../common/elements"
import { useTranslation, Trans } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation()
  const { blocks, transactions, fullNodes } = useContext(XmyDataContext)

  const historyItems = t("about.history.items", { returnObjects: true })
  const distributionItems = t("about.specifications.distribution.items", {
    returnObjects: true,
  })
  console.log("distributionItems", { distributionItems })
  const featuresItems = t("about.specifications.features.items", {
    returnObjects: true,
  })

  return (
    <>
      <SEO title={t("about.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("about.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
      <div tw="bg-light-grey py-24 px-6 sm:py-30 sm:px-0">
        <PageContainer>
          <BodyBlock translationKey="about.top" />
          <div tw="flex sm:flex-wrap flex-col sm:flex-row">
            <div tw="w-full sm:w-half mb-10">
              <span
                tw="text-2xl sm:text-4xl leading-none font-bold"
                css={[gradientTextStylePurple]}
              >
                8
              </span>
              <BodyText>{t("about.stats.years")}</BodyText>
            </div>
            <div tw="w-full sm:w-half mb-10">
              <span
                tw="text-2xl sm:text-4xl leading-none font-bold"
                css={[gradientTextStylePink]}
              >
                {t("formattedNumber", { number: fullNodes })}
              </span>
              <BodyText>{t("about.stats.full_nodes")}</BodyText>
            </div>
            <div tw="w-full sm:w-half mb-10">
              <span
                tw="text-2xl sm:text-4xl leading-none font-bold"
                css={[gradientTextStyleGreen]}
              >
                {t("formattedNumber", { number: blocks })}
              </span>
              <BodyText>{t("about.stats.blocks")}</BodyText>
            </div>
            <div tw="w-full sm:w-half">
              <span
                tw="text-2xl sm:text-4xl leading-none font-bold"
                css={[gradientTextStyleBlue]}
              >
                {t("formattedNumber", { number: transactions })}
              </span>
              <BodyText>{t("about.stats.transactions")}</BodyText>
            </div>
          </div>
        </PageContainer>
      </div>
      <div tw="bg-black text-white">
        <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
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
      <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
        <BodyBlock translationKey="about.community" />
        <BodyBlock translationKey="about.fair" />
      </PageContainer>
      <div tw="bg-light-grey py-24 px-6 sm:py-30 sm:px-0" id="specifications">
        <PageContainer>
          <MediumBoldText tw="mb-10 sm:mb-24">
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
