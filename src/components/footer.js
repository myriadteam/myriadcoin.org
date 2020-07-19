import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"
import classNames from "classnames"

import logo from "../images/logo.svg"
import iconFacebook from "../images/icons/icon-facebook.svg"
import iconTwitter from "../images/icons/icon-twitter.svg"
import iconTelegram from "../images/icons/icon-telegram.svg"
import iconInstagram from "../images/icons/icon-instagram.svg"

const columns = [
  [
    { text: "Myriad", link: "/", icon: logo },
    {
      text: "Instagram",
      url: "https://t.me/https://www.instagram.com/myriadcoin",
      icon: iconInstagram,
    },
    {
      text: "Telegram",
      url: "https://t.me/Myriadcoinofficial",
      icon: iconTelegram,
    },
    {
      text: "Twitter",
      url: "https://twitter.com/myriadcoin",
      icon: iconTwitter,
    },
    {
      text: "Facebook",
      url: "https://www.facebook.com/themyriadplatform",
      icon: iconFacebook,
    },
    {
      text: "Reddit",
      url: "https://www.reddit.com/r/myriadcoin/",
      icon: iconInstagram,
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
  [{ text: "Business" }, { text: "Contact", link: "/contact" }],
]

const FooterContainer = tw.header`container flex justify-between py-24 text-sm`
const FooterLink = tw.a`flex items-center py-1 hover:text-purple`
const FooterLinkTitle = tw.span`flex items-center`

const Footer = () => {
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
      [`mb-4 flex-grow`]: key === 0,
    })
    return (
      <li className={classes} key={`footer-item-${key}`}>
        {item.url || item.link ? renderLink(item) : renderTitle(item)}
      </li>
    )
  }

  const renderIcon = (svg, text) => {
    return <img src={svg} className="fill-current mr-2" alt={`Icon ${text}`} />
  }

  const renderLink = item => {
    if (item.url) {
      return (
        <FooterLink href={item.url}>
          {item.icon && renderIcon(item.icon, item.text)}
          <FooterLinkTitle>{item.text}</FooterLinkTitle>
        </FooterLink>
      )
    } else {
      return (
        <Link
          to={item.link}
          className="flex items-center py-1 hover:text-purple"
        >
          {item.icon && renderIcon(item.icon, item.text)}
          <FooterLinkTitle>{item.text}</FooterLinkTitle>
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
    <FooterContainer>
      {columns.map((items, key) => renderColumn(items, key))}
    </FooterContainer>
  )
}

export default Footer
