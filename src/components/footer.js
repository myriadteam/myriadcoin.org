import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"
import classNames from "classnames"
import SvgIcon from "../components/svg-icon"
import { useTranslation } from "react-i18next"

import Bubble from "../components/bubble"
import Logo from "../svgs/logo.inline.svg"
import IconArrowBlack from "../svgs/icons/arrow-forward.inline.svg"

import { PageContainer, MediumBoldText } from "../common/elements"

const columns = [
  [
    { text: "Myriad", link: "/", Component: Logo },
    {
      text: "Instagram",
      url: "https://www.instagram.com/myriadcoin",
      icon: true,
    },
    {
      text: "Telegram",
      url: "https://t.me/Myriadcoinofficial",
      icon: true,
    },
    {
      text: "Twitter",
      url: "https://twitter.com/myriadcoin",
      icon: true,
    },
    {
      text: "Facebook",
      url: "https://www.facebook.com/themyriadplatform",
      icon: true,
    },
    {
      text: "Reddit",
      url: "https://www.reddit.com/r/myriadcoin/",
      icon: true,
    },
  ],
  [
    { text: "Explore" },
    { text: "About", link: "/about" },
    { text: "Community", link: "/community" },
    { text: "Blog", link: "/blog" },
  ],
  [
    { text: "Resources" },
    { text: "Mine", link: "/mine" },
    { text: "Hold", link: "/hold" },
    { text: "Buy", link: "/buy" },
    { text: "Accept", link: "/accept" },
  ],
  [{ text: "Contact", link: "/contact" }],
]

const FooterContainer = tw.header`container flex justify-between py-24 text-xxs flex-col sm:flex-row px-6 sm:px-0`
const FooterLink = tw.a`flex items-center py-1 hover:text-purple`
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
        <FooterLink href={url}>
          {icon && icon !== true && renderIcon(icon, text)}
          {icon && icon === true && (
            <span tw="mr-2">
              <SvgIcon name={text} size="sm" />
            </span>
          )}
          <FooterLinkTitle>{text}</FooterLinkTitle>
        </FooterLink>
      )
    } else {
      return (
        <Link to={link} className="flex items-center py-1 hover:text-purple">
          {icon && renderIcon(icon, text)}
          {Component && (
            <span tw="mr-2">
              <Component />
            </span>
          )}
          <FooterLinkTitle>{text}</FooterLinkTitle>
        </Link>
      )
    }
  }

  const renderTitle = item => {
    return (
      <>
        {item.icon && renderIcon(item.icon, item.text)}{" "}
        <FooterLinkTitle>{item.text}</FooterLinkTitle>
      </>
    )
  }

  return (
    <>
      <PageContainer tw="py-24 sm:py-30 px-6 sm:px-0">
        <div tw="max-w-2xl">
          <Bubble tw="mb-8 sm:mb-16" color="blue">
            {t("home.telegram.bubble")}
          </Bubble>
          <MediumBoldText tw="text-black dark:text-white mb-8 sm:mb-16">
            {t("home.telegram.title")}
          </MediumBoldText>
          <a
            href="https://t.me/Myriadcoinofficial"
            tw="underline text-sm sm:text-md font-bold leading-extra-tight hover:text-purple"
          >
            {t("home.telegram.join")}
            <IconArrowBlack tw="ml-2 w-32p h-32p inline-flex" />
          </a>
        </div>
      </PageContainer>
      <FooterContainer>
        {columns.map((items, key) => renderColumn(items, key))}
      </FooterContainer>
    </>
  )
}

export default Footer
