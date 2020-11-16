import React from "react"
import { algoritms } from "../../../common/algoritms"
import {
  MediumBoldText,
  BodyText,
  BodyBoldText,
} from "../../../common/elements"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

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
          <a
            href={url}
            tw="inline-flex items-center justify-center bg-black hover:bg-purple text-white font-bold text-sm py-3 px-10 rounded-md mb-6"
          >
            {name}
          </a>
        </div>
      ))}
    </>
  )
}

export default MinePool
