import React from "react"
import tw, { css } from "twin.macro"
import { Trans } from "react-i18next"
import InfoTile from "../shared/info-tile"
import BoxedIcon from "../boxed-icon"

import {
  BodyText,
  BodyBoldText,
  MediumBoldText,
  LinkButton,
} from "../../common/elements"

const AlgoSHA265d = () => {
  return (
    <div
      id="scrypt"
      tw="py-12 sm:py-25 last:border-0 border-b border-black border-opacity-25"
    >
      <MediumBoldText tw="mb-6">
        <Trans i18nkey="components.algoritms.scrypt.title">Scrypt</Trans>
      </MediumBoldText>
      <div tw="flex -mx-4 mb-14">
        <InfoTile>
          <Trans i18nkey="components.algoritms.scrypt.recommended_for">
            Recommended algo for ASIC miners.
          </Trans>
        </InfoTile>
        <InfoTile>
          <Trans i18nkey="components.algoritms.scrypt.merged_mining">
            Merged mining.
          </Trans>
        </InfoTile>
      </div>
      <div tw="flex items-center mb-4.5">
        <BoxedIcon symbol="laptop" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.scrypt.software_for">
            Software for Scrypt
          </Trans>
        </BodyBoldText>
      </div>
      <BodyText tw="mb-14">
        <Trans i18nkey="components.algoritms.scrypt.any_compatible_asic">
          You may use any Scrypt compatible ASIC
        </Trans>
      </BodyText>
      <div tw="flex items-center mb-4">
        <BoxedIcon symbol="pools" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.Scrypt.mining_pools_for">
            Available mining pools for Scrypt
          </Trans>
        </BodyBoldText>
      </div>
      <div tw="flex">
        <LinkButton href="https://www.zergpool.com" tw="mb-2 mr-2">
          zergpool
        </LinkButton>
        <LinkButton href="http://blockmasters.co" tw="mb-2 mr-2">
          Block Masters
        </LinkButton>
        <LinkButton href="https://ahashpool.com" tw="mb-2 mr-2">
          ahashpool
        </LinkButton>
        <LinkButton
          href="https://prohashing.com/explorer/Myriadcoin/1bec9256362a816bcc9cffff23b4e316f0525a9cb8a979dc9ae5f8dcc3fa2955"
          tw="mb-2 mr-2"
        >
          Mining-Dutch
        </LinkButton>
      </div>
    </div>
  )
}

export default AlgoSHA265d
