import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import iconArrowBlack from "../svgs/icons/arrow-forward.svg"

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

  const historyItems = t("about.history.items", { returnObjects: true })
  return (
    <>
      <SEO title={t("about.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0">
          <BigText tw="mb-8">{t("about.title")}</BigText>
          <img src={iconArrowBlack} alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
      <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
        <div tw="max-w-2xl">
          <MediumBoldText>{t("about.top.title")}</MediumBoldText>
          <Trans
            i18nKey="about.top.body"
            components={[<BodyText tw="mb-6" />]}
          />
        </div>
      </PageContainer>
      <div tw="bg-black text-white">
        <PageContainer tw="py-24 px-6 sm:py-48 sm:px-0">
          <MediumBoldText tw="mb-24">{t("about.history.title")}</MediumBoldText>

          <div tw="flex flex-col sm:-mx-8">
            {historyItems.map(item => (
              <div tw="mb-16 sm:mb-10 sm:max-w-2xl items-stretch justify-center sm:even:self-end sm:even:text-right flex flex-col sm:flex-row sm:even:flex-row-reverse">
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
    </>
  )
}

export default AboutPage
