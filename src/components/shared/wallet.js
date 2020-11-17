import React, { useState } from "react"
import { osName } from "react-device-detect"
import { animated, useSpring } from "react-spring"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"

import { MediumBoldText, BodyText } from "../../common/elements"
import { platforms } from "../../common/wallets"
import Image from "../image"
import Dropdown from "../dropdown"
import iconArrowWhite from "../../svgs/icons/arrow-forward-white.svg"

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
            <span tw="inline-flex items-center">
              <a
                href={url}
                tw="underline text-md sm:text-base font-bold leading-extra-tight hover:text-purple"
              >
                {name}
              </a>
              <img src={iconArrowWhite} alt=">" tw="ml-4 text-white w-8 h-8" />
            </span>
          </li>
        ))}
      </ul>
      {github && (
        <a
          href={github}
          tw="block mb-4 text-xxs sm:text-xs font-medium underline hover:text-purple"
        >
          {t("components.wallet.github")}
        </a>
      )}
      {homepage && (
        <a
          href={homepage}
          tw="block mb-4 text-xxs sm:text-xs font-medium underline hover:text-purple"
        >
          {t("components.wallet.homepage")}
        </a>
      )}
    </div>
  )
}

const Wallet = ({ selected, title, theme = "light" }) => {
  const { t } = useTranslation()
  const [selectedPlatform, changePlatform] = useState(null)

  let selectedPlatformObject = platforms.find(
    platform => platform.label === (selectedPlatform || osName)
  )

  return (
    <section tw="text-white py-24 sm:py-40 grid grid-cols-1 sm:grid-cols-5">
      {selectedPlatformObject && (
        <div tw="p-6 sm:p-0 max-h-620 relative sm:col-span-2">
          <Image
            filename={`wallets/${selectedPlatformObject.image}.png`}
            className="max-h-full"
          />
        </div>
      )}
      <div tw="p-6 sm:p-0 sm:col-span-2">
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
