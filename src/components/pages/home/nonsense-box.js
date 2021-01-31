import React from "react"
import { animated } from "react-spring"
import tw from "twin.macro"
import { MediumBoldText, BodyText } from "../../../common/elements"
import Link from "../../shared/link"

import InfoSvg from "../../../svgs/info.svg"

import { useTranslation, Trans } from "react-i18next"

const NonsenseBox = ({ keyName, style }) => {
  let { t } = useTranslation()

  const translationKey = `home.nonsense.bubbles.${keyName}`
  const title = t([`${translationKey}.title`, ""])
  const info = t([`${translationKey}.info`, ""])
  const link = t([`${translationKey}.link`, ""])

  return (
    <animated.div
      style={style}
      tw="overflow-hidden flex flex-col absolute bg-white dark:bg-dark-box shadow-wide rounded px-2 py-8 sm:px-6 sm:py-18 w-full h-full"
    >
      <div tw="flex justify-between items-center flex-col sm:flex-row mb-10 flex-shrink-0 px-4 sm:px-10">
        <MediumBoldText tw="mb-0">{title}</MediumBoldText>
        {info && (
          <div tw="mt-8 sm:mt-0 rounded-full bg-light-grey dark:bg-dark-info-box text-bubble-blue px-4 py-2 text-sm flex items-center whitespace-no-wrap">
            <div tw="mr-2 w-6 h-6">
              <img src={InfoSvg} alt="i" />
            </div>{" "}
            {info}
          </div>
        )}
      </div>
      <div tw="overflow-y-auto h-full px-4 sm:px-10">
        <Trans
          i18nKey={`${translationKey}.body`}
          components={[<BodyText tw="mb-8 last:mb-0" />]}
        />
        {link && (
          <Link uri={link} tw="inline-block text-sm sm:text-base font-medium">
            {t("common.readMore")}
          </Link>
        )}
      </div>
    </animated.div>
  )
}

export default NonsenseBox
