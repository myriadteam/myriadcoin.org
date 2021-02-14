import React, { useState } from "react"
import { osName } from "react-device-detect"
import { animated, useSpring } from "react-spring"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"

import { MediumBoldText, BodyText } from "../../common/elements"
import { platforms } from "../../common/wallets"
import MyrImage from "../image"
import Dropdown from "../dropdown"
import Link from "./link"

const WalletPlatform = ({ platform: { wallets }, isVisible }) => {
  const style = useSpring({
    overflow: "hidden",
    opacity: isVisible ? 1 : 0,
    height: isVisible ? "auto" : 0,
  })
  return (
    <animated.div style={style}>
      {wallets &&
        wallets.map(wallet => (
          <WalletItem wallet={wallet} key={`wallet-${wallet.name}`} />
        ))}
    </animated.div>
  )
}

const WalletItem = ({ wallet: { name, github, homepage, versions } }) => {
  const { t } = useTranslation()
  return (
    <div>
      <BodyText tw="font-bold mt-10 mb-4">{name}</BodyText>

      <ul tw="mb-4">
        {versions.map(({ name, url }, key) => (
          <li tw="mb-4" key={key}>
            <Link
              uri={url}
              tw="text-md sm:text-base font-bold leading-extra-tight"
              showArrow
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {github && (
        <Link uri={github} tw="block mb-4 text-xxs sm:text-xs font-medium">
          {t("components.wallet.github")}
        </Link>
      )}
      {homepage && (
        <Link uri={homepage} tw="block mb-4 text-xxs sm:text-xs font-medium">
          {t("components.wallet.homepage")}
        </Link>
      )}
    </div>
  )
}

const Wallet = ({ selected, title, theme = "light" }) => {
  const { t } = useTranslation()
  const [selectedPlatform, changePlatform] = useState(null)

  let selectedPlatformObject = platforms.find(platform => {
    return platform.label === (selectedPlatform || osName)
  })
  return (
    <section tw="text-white py-24 sm:py-32 flex flex-col-reverse sm:flex-row">
      {selectedPlatformObject && (
        <MyrImage
          filename={`wallets/${selectedPlatformObject.image.toLocaleLowerCase()}.png`}
          className="sm:mr-12"
        />
      )}
      <div tw="p-6 sm:p-0 flex flex-col justify-center">
        <div>
          <MediumBoldText>{title}</MediumBoldText>
          <BodyText tw="mb-10">{t("mine.wallet.body")}</BodyText>
          <Dropdown
            options={platforms}
            defaultValue={
              selectedPlatformObject && selectedPlatformObject.value
            }
            theme="dark"
            onChange={({ value }) => {
              changePlatform(value)
            }}
          />
          {platforms.map((platform, key) => (
            <WalletPlatform
              platform={platform}
              key={key}
              isVisible={
                selectedPlatformObject &&
                selectedPlatformObject.label === platform.label
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Wallet
