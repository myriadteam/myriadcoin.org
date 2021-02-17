import React, { useEffect, useState } from "react"
import tw, { css } from "twin.macro"
import { useTranslation } from "react-i18next"

import { MediumBoldText, BodyText, BigText } from "../../../common/elements"
import SeedNodeMap from "./seed-node-map"

import { gradientTextStyleBlue } from "../../../common/gradients"

const SeedNodeMapSection = () => {
  const { t } = useTranslation()
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    const getData = async () => {
      const uri = `https://xmy-nodes.coinid.org/latest.json`
      return await fetch(uri).then(r => r.json())
    }

    getData().then(setNodes)
  }, [])

  return (
    <>
      <MediumBoldText>{t("analytics.map.title")}</MediumBoldText>
      <div tw="md:flex md:flex-row mb-14">
        <BodyText tw="mr-10 mb-10">{t("analytics.map.description")}</BodyText>
        <div tw="h-24 px-3 sm:h-32 sm:px-6 inline-flex flex-col flex-shrink-0 flex-grow-0 bg-white dark:bg-dark-bg rounded shadow-wide items-center justify-center text-center">
          <BigText css={gradientTextStyleBlue}>
            {t("formattedNumber", { number: nodes.length })}
          </BigText>
          <div tw="pb-2">Open nodes</div>
        </div>
      </div>
      <SeedNodeMap nodes={nodes} />
    </>
  )
}

export default React.memo(SeedNodeMapSection)
