import React, { useState } from "react"
import { Link } from "gatsby"
import {
  BigText,
  MediumText,
  MediumBoldText,
  BodyText,
  PageContainer,
} from "../../../common/elements"
import tw, { styled } from "twin.macro"
import InfoSvg from "../../../svgs/info.svg"

import { useTranslation, Trans } from "react-i18next"

const NonsenseButton = styled.button`
  ${tw`px-4 py-2 whitespace-no-wrap transition duration-100 ease-in transform rounded-full hover:opacity-75`}
  ${({ thisKey, selectedKey }) =>
    thisKey === selectedKey
      ? tw`text-white bg-bubble-blue`
      : tw`bg-light-grey text-grey`}
`

const dataKeys = [
  "asic_farms",
  "pre_mining",
  "secure_storing",
  "ico",
  "no_development",
  "pump_and_dump",
  "non_vibrant_communities",
  "instant_transactions",
]

const Nonsense = () => {
  let { t } = useTranslation()
  let [currentKey, setCurrentKey] = useState("asic_farms")

  const changeKey = key => {
    setCurrentKey(key)
  }

  const translationKey = `home.nonsense.bubbles.${currentKey}`
  const title = t([`${translationKey}.title`, ""])
  const info = t([`${translationKey}.info`, ""])
  const link = t([`${translationKey}.link`, ""])

  return (
    <div tw="mt-24 sm:mt-48">
      <PageContainer tw="px-6 sm:px-0">
        <BigText tw="mt-20 mb-20">{t("home.nonsense.title")}</BigText>
        <MediumText tw="mb-24">{t("home.nonsense.caption")}</MediumText>
        <div tw="bg-white shadow-wide rounded px-6 py-8 sm:px-16 sm:py-18 -mx-3 sm:mx-0">
          <div tw="flex justify-between items-center mb-10">
            <MediumBoldText tw="mb-0">{title}</MediumBoldText>
            {info && (
              <div tw="rounded-full bg-light-grey text-bubble-blue px-4 py-2 text-sm flex items-center whitespace-no-wrap">
                <div tw="mr-2 w-6 h-6">
                  <img src={InfoSvg} alt="i" />
                </div>{" "}
                {info}
              </div>
            )}
          </div>
          <Trans
            i18nKey={`${translationKey}.body`}
            components={[<BodyText tw="mb-8 last:mb-0" />]}
          />
          {link && (
            <Link
              to={link}
              tw="underline hover:no-underline inline-block text-sm sm:text-base font-medium"
            >
              {t("common.readMore")}
            </Link>
          )}
        </div>
      </PageContainer>
      <div tw="flex mt-10 xl:justify-center overflow-x-scroll">
        {dataKeys.map(key => {
          return (
            <span tw="px-2">
              <NonsenseButton
                onClick={() => changeKey(key)}
                key={`nonsense-key-${key}`}
                selectedKey={currentKey}
                thisKey={key}
              >
                {t(`home.nonsense.bubbles.${key}.title`)}
              </NonsenseButton>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Nonsense
