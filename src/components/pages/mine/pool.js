import React from "react"
import { algoritms } from "../../../common/algoritms"
import {
  MediumBoldText,
  BodyText,
  BodyBoldText,
} from "../../../common/elements"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

const LinkButton = tw.a`inline-flex items-center justify-center bg-black hover:bg-purple text-white font-bold text-xs py-3 px-10 rounded mb-6`

const MinePool = ({ selected }) => {
  let { t } = useTranslation()
  let algoritm = algoritms.find(algo => algo.value === selected)
  return (
    <>
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
    </>
  )
}

export default MinePool
