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
  Code,
} from "../../common/elements"

const AlgoMyrGroestl = () => {
  return (
    <div
      id="myr-groestl"
      tw="py-12 sm:py-25 last:border-0 border-b border-black border-opacity-25 font-normal"
    >
      <MediumBoldText tw="mb-6">
        <Trans i18nkey="components.algoritms.myr-groestl.title">
          Myr-Groestl
        </Trans>
      </MediumBoldText>
      <div tw="flex -mx-4 mb-14">
        <InfoTile>
          <Trans i18nkey="components.algoritms.myr-groestl.recommended_for">
            Recommended algo for GPU miners.
          </Trans>
        </InfoTile>
      </div>
      <div tw="flex items-center mb-4.5">
        <BoxedIcon symbol="laptop" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.myr-groestl.software_for">
            Software for Myr-Groestl
          </Trans>
        </BodyBoldText>
      </div>
      <BodyText tw="mb-14">
        <Trans i18nkey="components.algoritms.myr-groestl.if_you_mine_you_have_options">
          If you mine using Myr-Groestl, you have a few options.
        </Trans>
      </BodyText>

      <div tw="mb-10">
        <LinkButton
          tw="mb-6"
          href="https://bitcointalk.org/index.php?topic=632503.0"
        >
          SGMiner
        </LinkButton>
        <div tw="mb-2 text-sm">
          <Trans i18nkey="components.algoritms.myr-groestl.suggested_command_line_for_sgminer">
            Suggested Command Line for SGminer
          </Trans>
        </div>
        <Code>
          {
            "sgminer --algorithm myriadcoin-groestl --no-extranonce -o {pool-URL} -O Username:Password"
          }
        </Code>
      </div>

      <div tw="mb-10">
        <LinkButton tw="mb-6" href="https://bitcointalk.org/?topic=770064">
          CCMiner
        </LinkButton>
        <div tw="text-sm mb-2">
          <Trans i18nkey="components.algoritms.myr-groestl.suggested_command_line_for_ccminer">
            Suggested Command Line for CCminer
          </Trans>
        </div>
        <Code tw="text-sm">{"ccminer -a myr-gr -o {pool-URL} -O Username:Password"}</Code>
      </div>

      <div tw="mb-14">
        <LinkButton tw="mb-6" href="https://bitcointalk.org/?topic=770064">
          CPUMiner-multi
        </LinkButton>
        <div tw="text-sm mb-2">
          <Trans i18nkey="components.algoritms.myr-groestl.suggested_command_line_for_cpuminer_multi">
            Suggested Command Line for CPUMiner-multi
          </Trans>
        </div>
        <Code tw="text-sm">{"cpuminer -a myr-gr -o {pool-URL} -O Username:Password"}</Code>
      </div>

      <div tw="flex items-center mb-4">
        <BoxedIcon symbol="pools" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.Scrypt.mining_pools_for">
            Available mining pools for Myr-Groestl
          </Trans>
        </BodyBoldText>
      </div>
      <div tw="flex flex-wrap">
        <LinkButton href="nz.nutty.one:5545" tw="mb-2 mr-2">
          Nutty P2pool node
        </LinkButton>
        <LinkButton
          href="https://myriadcoin-groestl.miningpoolhub.com/"
          tw="mb-2 mr-2"
        >
          Mining Pool Hub
        </LinkButton>
        <LinkButton href="https://ahashpool.com" tw="mb-2 mr-2">
          ahashpool
        </LinkButton>
        <LinkButton href="https://www.zpool.ca/" tw="mb-2 mr-2">
          ZPool
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

export default AlgoMyrGroestl
