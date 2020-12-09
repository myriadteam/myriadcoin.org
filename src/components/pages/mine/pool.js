import React from "react"
import { algoritms } from "../../../common/algoritms"
import {
  MediumBoldText,
  BodyText,
  BodyBoldText,
  LinkButton,
} from "../../../common/elements"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

const MinePool = ({ selected }) => {
  let { t } = useTranslation()
  let algoritm = algoritms.find(algo => algo.value === selected)
  return (
    <div tw="sm:max-w-screen-sm">
      <MediumBoldText>{t("mine.pool.title")}</MediumBoldText>
      <BodyText>{t("mine.pool.body")}</BodyText>
      <BodyBoldText tw="my-8">
        {t("mine.pool.available_for")}
        {algoritm.label}
      </BodyBoldText>
      <div className="flex">
        {algoritm.miningPools.map(({ url, name }, key) => (
          <LinkButton
            href={url}
            className="mr-4 last:mr-0"
            key={`link-btn-${key}`}
          >
            {name}
          </LinkButton>
        ))}
      </div>
    </div>
  )
}

export default MinePool
