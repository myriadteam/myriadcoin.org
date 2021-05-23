import React from "react"
import { Trans } from "react-i18next"
import {
  BodyBoldText,
  BodyText,
  LinkButton,
  MediumBoldText,
  Code,
} from "../../common/elements"
import BoxedIcon from "../boxed-icon"
import InfoTile from "../shared/info-tile"
import tw from "twin.macro"

const AlgoArgon2d = () => {
  return (
    <div
      id="argon2d"
      tw="py-12 sm:py-25 last:border-0 border-b border-black border-opacity-25"
    >
      <MediumBoldText tw="mb-6">
        <Trans i18nkey="components.algoritms.argon2d.title">Argon 2d</Trans>
      </MediumBoldText>
      <div tw="flex -mx-4 mb-14">
        <InfoTile>
          <Trans i18nkey="components.algoritms.argon2d.recommended_for">
            Recommended algo for CPU miners.
          </Trans>
        </InfoTile>
      </div>

      <BodyText tw="mb-14">
        <Trans i18nkey="components.algoritms.argon2d.description">
          Argon2 is a key derivation function that was selected as the winner of
          the Password Hashing Competition in July 2015. Argon2d maximizes
          resistance to GPU cracking attacks. It accesses the memory array in a
          password dependent order, which reduces the possibility of time memory
          trade-off aka (TMTO) attacks, but introduces possible side-channel
          attacks.
        </Trans>
      </BodyText>

      <div tw="flex items-center mb-4.5">
        <BoxedIcon symbol="laptop" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.argon2d.software_for">
            Software for Argon 2d
          </Trans>
        </BodyBoldText>
      </div>

      <div tw="mb-14">
        <LinkButton
          tw="mb-6"
          href="https://github.com/JayDDee/cpuminer-opt/releases"
        >
          CPUMiner-opt
        </LinkButton>
        <div tw="text-sm mb-2">
          <Trans i18nkey="components.algoritms.argon2d.suggested_command_line_for_cpuminer_opt">
            Suggested Command Line for CPUMiner-opt
          </Trans>
        </div>
        <Code tw="text-sm">
          {"cpuminer -a argon2d4096 -o {pool-URL} -u username -p password"}
        </Code>
      </div>

      <div tw="flex items-center mb-4">
        <BoxedIcon symbol="pools" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.argon2d.mining_pools_for">
            Available mining pools for Argon 2d
          </Trans>
        </BodyBoldText>
      </div>
      <div tw="flex flex-wrap">
        <LinkButton href="p2p-spb.xyz:6002" tw="mb-2 mr-2">
          P2Pool Node
        </LinkButton>

        <LinkButton href="https://pokemongomongo.tk" tw="mb-2 mr-2">
          Pokemongomongo.tk Pool
        </LinkButton>
        <LinkButton href="https://www.zergpool.com" tw="mb-2 mr-2">
          zergpool
        </LinkButton>
        <LinkButton href="https://www.zpool.ca/" tw="mb-2 mr-2">
          ZPool
        </LinkButton>
      </div>
    </div>
  )
}

export default AlgoArgon2d
