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
      {algoritm.miningPools.map(({ url, name }, key) => (
        <div key={`mining-pool-key-${key}`}>
          <LinkButton href={url}>{name}</LinkButton>
        </div>
      ))}
    </div>
  )
}

export default MinePool
