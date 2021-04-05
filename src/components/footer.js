import React from "react"
import tw from "twin.macro"
import classNames from "classnames"
import SvgIcon from "../components/svg-icon"
import Link from "../components/shared/link"
import { useTranslation } from "react-i18next"

import Bubble from "../components/bubble"
import Logo from "../svgs/logo.inline.svg"

import { PageContainer, MediumBoldText } from "../common/elements"

const columns = [
  [
    { text: "myriad", uri: "/", Component: Logo },
    {
      text: "reddit",
      uri: "https://www.reddit.com/r/myriadcoin/",
      icon: true,
    },
    {
      text: "telegram",
      uri: "https://t.me/Myriadcoinofficial",
      icon: true,
    },
    {
      text: "discord",
      uri: "https://discord.gg/fbDrFWZ",
      icon: true,
    },
    {
      text: "twitter",
      uri: "https://twitter.com/myriadcoin",
      icon: true,
    },
    {
      text: "instagram",
      uri: "https://www.instagram.com/myriadcoin",
      icon: true,
    },
  ],
  [
    { text: "explore" },
    { text: "about", uri: "/about" },
    { text: "blog", uri: "https://medium.com/myriadcoin" },
  ],
  [
    { text: "resources" },
    { text: "download", uri: "/hold#download" },
    { text: "mine", uri: "/mine" },
    { text: "hold", uri: "/hold" },
  ],
  [
    { text: "external" },
    { text: "blockbook", uri: "https://xmy-blockbook1.coinid.org" },
    { text: "chainz", uri: "https://chainz.cryptoid.info/xmy" },
    { text: "myrstats", uri: "https://cryptapus.org/myr/myrstat" },
  ],
]

const FooterContainer = tw.header`container flex justify-between py-24 text-xxs flex-col sm:flex-row px-6`
const FooterLinkTitle = tw.span`flex items-center`

const Footer = () => {
  const { t } = useTranslation()
  const renderColumn = (items, key) => {
    let classes = classNames("footer__list", {
      [`footer__list--social`]: key === 0,
    })
    return (
      <ul className={classes} key={`footer-list-${key}`}>
        {items.map((item, idx) => renderItem(item, idx))}
      </ul>
    )
  }

  const renderItem = (item, key) => {
    let classes = classNames({
      [`mb-4 flex-grow mt-8 sm:mt-0`]: key === 0,
    })
    return (
      <li className={classes} key={`footer-item-${key}`}>
        {item.uri ? renderLink(item) : renderTitle(item)}
      </li>
    )
  }

  const renderIcon = (svg, text) => {
    return <img src={svg} className="mr-2" alt={`Icon ${text}`} />
  }

  const renderLink = ({ uri, Component, icon, text }) => {
    return (
      <Link uri={uri} tw="flex items-center py-1" noUnderline>
        {icon && icon !== true && renderIcon(icon, text)}
        {icon && icon === true && (
          <span tw="mr-2">
            <SvgIcon name={text} size="sm" />
          </span>
        )}
        {Component && (
          <span tw="mr-2">
            <Component />
          </span>
        )}
        <FooterLinkTitle>{t(`navigation.links.${text}`)}</FooterLinkTitle>
      </Link>
    )
  }

  const renderTitle = ({ icon, text }) => {
    return (
      <>
        {icon && renderIcon(icon, text)}{" "}
        <FooterLinkTitle>{t(`navigation.links.${text}`)}</FooterLinkTitle>
      </>
    )
  }

  return (
    <>
      <PageContainer tw="py-24 sm:py-30 px-6" id="community">
        <div tw="max-w-2xl">
          <Bubble tw="mb-8 sm:mb-16" color="blue">
            {t("home.community.bubble")}
          </Bubble>
          <MediumBoldText tw="text-black dark:text-white mb-8 sm:mb-16">
            {t("home.community.title")}
          </MediumBoldText>
          <div tw="flex">
          <Link
            uri="https://t.me/Myriadcoinofficial"
            tw="text-sm sm:text-md font-bold mr-12"
            showArrow
          >
            {t("home.community.join_telegram")}
          </Link>
          <Link
            uri="https://www.reddit.com/r/myriadcoin/"
            tw="text-sm sm:text-md font-bold"
            showArrow
          >
            {t("home.community.join_reddit")}
          </Link>
          </div>
        </div>
      </PageContainer>
      <FooterContainer>
        {columns.map((items, key) => renderColumn(items, key))}
      </FooterContainer>
    </>
  )
}

export default Footer
