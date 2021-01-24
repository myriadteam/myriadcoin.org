import React from "react"
import tw from "twin.macro"
import classNames from "classnames"
import SvgIcon from "../components/svg-icon"
import Link from "../components/shared/link"
import { useTranslation } from "react-i18next"

import Bubble from "../components/bubble"
import Logo from "../svgs/logo.inline.svg"
import IconArrowBlack from "../svgs/icons/arrow-forward.inline.svg"

import { PageContainer, MediumBoldText } from "../common/elements"

const columns = [
  [
    { text: "myriad", link: "/", Component: Logo },
    {
      text: "instagram",
      url: "https://www.instagram.com/myriadcoin",
      icon: true,
    },
    {
      text: "telegram",
      url: "https://t.me/Myriadcoinofficial",
      icon: true,
    },
    {
      text: "twitter",
      url: "https://twitter.com/myriadcoin",
      icon: true,
    },
    {
      text: "facebook",
      url: "https://www.facebook.com/themyriadplatform",
      icon: true,
    },
    {
      text: "reddit",
      url: "https://www.reddit.com/r/myriadcoin/",
      icon: true,
    },
  ],
  [
    { text: "explore" },
    { text: "about", link: "/about" },
    { text: "community", link: "/community" },
    { text: "blog", url: "https://medium.com/myriadcoin" },
  ],
  [
    { text: "resources" },
    { text: "download", link: "/hold#download" },
    { text: "mine", link: "/mine" },
    { text: "hold", link: "/hold" },
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
        {item.url || item.link ? renderLink(item) : renderTitle(item)}
      </li>
    )
  }

  const renderIcon = (svg, text) => {
    return <img src={svg} className="mr-2" alt={`Icon ${text}`} />
  }

  const renderLink = ({ url, Component, icon, text, link }) => {
    if (url) {
      return (
        <Link uri={url} tw="flex items-center py-1">
          {icon && icon !== true && renderIcon(icon, text)}
          {icon && icon === true && (
            <span tw="mr-2">
              <SvgIcon name={text} size="sm" />
            </span>
          )}
          <FooterLinkTitle>{t(`navigation.links.${text}`)}</FooterLinkTitle>
        </Link>
      )
    } else {
      return (
        <Link uri={link} tw="flex items-center py-1">
          {icon && renderIcon(icon, text)}
          {Component && (
            <span tw="mr-2">
              <Component />
            </span>
          )}
          <FooterLinkTitle>{t(`navigation.links.${text}`)}</FooterLinkTitle>
        </Link>
      )
    }
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
      <PageContainer tw="py-24 sm:py-30 px-6">
        <div tw="max-w-2xl">
          <Bubble tw="mb-8 sm:mb-16" color="blue">
            {t("home.telegram.bubble")}
          </Bubble>
          <MediumBoldText tw="text-black dark:text-white mb-8 sm:mb-16">
            {t("home.telegram.title")}
          </MediumBoldText>
          <Link
            uri="https://t.me/Myriadcoinofficial"
            tw="underline text-sm sm:text-md font-bold leading-extra-tight hover:text-purple"
          >
            {t("home.telegram.join")}
            <IconArrowBlack tw="ml-2 w-32p h-32p inline-flex" />
          </Link>
        </div>
      </PageContainer>
      <FooterContainer>
        {columns.map((items, key) => renderColumn(items, key))}
      </FooterContainer>
    </>
  )
}

export default Footer
