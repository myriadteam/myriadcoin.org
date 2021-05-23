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

const AlgoYescrypt = () => {
  return (
    <div
      id="yescrypt"
      tw="py-12 sm:py-25 last:border-0 border-b border-black border-opacity-25"
    >
      <MediumBoldText tw="mb-6">
        <Trans i18nkey="components.algoritms.yescrypt.title">Yescrypt</Trans>
      </MediumBoldText>
      <div tw="flex -mx-4 mb-14">
        <InfoTile>
          <Trans i18nkey="components.algoritms.yescrypt.recommended_for">
            Recommended algo for CPU miners.
          </Trans>
        </InfoTile>
      </div>

      <BodyText tw="mb-14">
        <Trans i18nkey="components.algoritms.yescrypt.description">
          Yescrypt is a password-based key derivation function. It applies slow
          cryptographic operations to a password and salt, creating a key
          suitable for performing encryption or storage to validate the password
          in the future. Yescrypt algoritm is based on scrypt by Colin Percival
          of Tarsnap.
        </Trans>
      </BodyText>

      <div tw="flex items-center mb-4.5">
        <BoxedIcon symbol="laptop" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.yescrypt.software_for">
            Software for Yescrypt
          </Trans>
        </BodyBoldText>
      </div>

      <div tw="mb-14">
        <LinkButton tw="mb-6" href="https://github.com/JayDDee/cpuminer-opt/releases">
          CPUMiner-opt
        </LinkButton>
        <div tw="text-sm mb-2">
          <Trans i18nkey="components.algoritms.yescrypt.suggested_command_line_for_cpuminer_opt">
            Suggested Command Line for CPUMiner-opt
          </Trans>
        </div>
        <Code tw="text-sm">{"cpuminer -a yescrypt -o {pool-URL} -u username -p password"}</Code>
      </div>

      <div tw="flex items-center mb-4">
        <BoxedIcon symbol="pools" />
        <BodyBoldText tw="mb-0">
          <Trans i18nkey="components.algoritms.yescrypt.mining_pools_for">
            Available mining pools for Yescrypt
          </Trans>
        </BodyBoldText>
      </div>
      <div tw="flex flex-wrap">
        <LinkButton href="yescrypt.easymine.online:6000" tw="mb-2 mr-2">
          Yescrypt Easymine
        </LinkButton>
        <LinkButton
          href="https://myriadcoin-yescrypt.miningpoolhub.com/"
          tw="mb-2 mr-2"
        >
          Mining Pool Hub
        </LinkButton>
        <LinkButton href="https://myriadcoin.tk" tw="mb-2 mr-2">
          Myriadcoin.tk Pool (with Unitus merged-mining)
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
        <LinkButton
          href="https://www.mining-dutch.nl/pools/myriadcoin.php"
          tw="mb-2"
        >
          Mining-Dutch
        </LinkButton>
      </div>
    </div>
  )
}

export default AlgoYescrypt
