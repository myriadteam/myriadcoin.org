import React, { useState } from "react"
import { osName } from "react-device-detect"
import { animated, useSpring } from "react-spring"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"

import { MediumBoldText, BodyText } from "../../common/elements"
import { platforms } from "../../common/wallets"
import Dropdown from "../dropdown"
import iconArrowWhite from "../../images/icons/arrow-forward-white.svg"

// eslint-disable-next-line no-undef
const defaultWalletImage = require("../../images/wallets/default.png")

const WalletPlatform = ({ platform: { wallets }, isVisible }) => {
  const style = useSpring({
    overflow: "hidden",
    opacity: isVisible ? 1 : 0,
    height: isVisible ? "auto" : 0,
  })
  return (
    <animated.div style={style}>
      {wallets &&
        wallets.map((wallet, key) => <WalletItem wallet={wallet} key={key} />)}
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
          <li tw="mb-4">
            <span tw="inline-flex items-center">
              <a
                href={url}
                tw="underline text-2xl sm:text-larger font-bold leading-extra-tight hover:text-purple"
              >
                {name}
              </a>
              <img src={iconArrowWhite} alt=">" tw="ml-4 text-white w-8 h-8" />
            </span>
          </li>
        ))}
      </ul>
      {github && (
        <a href={github} tw="block mb-4 underline hover:text-purple">
          {t("components.wallet.github")}
        </a>
      )}
      {homepage && (
        <a href={homepage} tw="block mb-4 underline hover:text-purple">
          {t("components.wallet.homepage")}
        </a>
      )}
    </div>
  )
}

const Wallet = ({ selected, title, theme = "light" }) => {
  const { t } = useTranslation()
  const [selectedPlatform, changePlatform] = useState(null)

  if (!platforms.some(platform => platform.label === selectedPlatform)) {
    changePlatform(osName)
  }

  return (
    <section tw="text-white">
      <div tw="px-6 sm:px-0">
        <MediumBoldText>{title}</MediumBoldText>
        <BodyText tw="mb-10">{t("mine.wallet.body")}</BodyText>
        <Dropdown
          options={platforms}
          selected={selectedPlatform}
          theme="dark"
          onChange={({ value }) => {
            changePlatform(value)
          }}
        />
        {platforms.map((platform, key) => (
          <WalletPlatform
            platform={platform}
            key={key}
            isVisible={selectedPlatform === platform.label}
          />
        ))}
      </div>
    </section>
  )
}

export default Wallet
