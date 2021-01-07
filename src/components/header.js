import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import LanguageMenu from "./language-menu"
import HeaderLink from "./header-link"
import tw, { css } from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import logo from "../images/logo@3x.png"

const HeaderContainer = tw.header`container flex justify-between py-8 px-8 sm:px-0 text-xxs`
const MenuList = tw.ul`text-xxs flex flex-col items-center sm:flex-row`
const MenuItem = tw.li`block mr-0 mt-4 text-center sm:mt-0 sm:mr-4`
const MenuItemEffect = tw.i`relative block overflow-hidden not-italic py-0.5`

const underlinedStyle = css`
  i:after {
    content: "";
    height: 2px;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 400%;
    will-change: transform;
    z-index: -1;
  }

  &.active i:after,
  &:hover i:after {
    animation: underline-gradient 6s linear infinite;
    background: linear-gradient(
      90deg,
      rgba(255, 138, 0, 1) 15%,
      rgba(223, 133, 255, 1) 35%,
      rgba(255, 138, 0, 1) 85%
    );
  }

  @keyframes underline-gradient {
    0% {
      transform: translate3d(0%, 0%, 0);
    }
    100% {
      transform: translate3d(-75%, 0%, 0);
    }
  }
`

const Header = ({ siteTitle, t, i18n }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <HeaderContainer>
      <nav tw="flex items-center justify-between flex-wrap w-full">
        <Link
          to="/"
          title={siteTitle}
          aria-label={`Visit ${siteTitle} (opens in a new window)`}
          className="flex items-center flex-shrink-0 mr-6"
        >
          <img
            src={logo}
            className="w-8 mr-2"
            alt="Myriad logo"
            width="32"
            height="32"
          />
          <h2 tw="tracking-tight">Myriad</h2>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            tw="flex items-center px-3 py-2 rounded hover:text-purple"
          >
            <svg
              tw="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${isExpanded ? `block` : `hidden`}`}
          tw="z-50 top-6 absolute left-0 bg-white shadow sm:shadow-none sm:top-auto sm:left-auto sm:relative sm:bg-transparent w-full sm:flex flex-grow sm:items-center sm:w-auto sm:justify-end"
        >
          <MenuList>
            <MenuItem>
              <HeaderLink
                to="/about"
                className="relative block px-4 py-2 overflow-hidden"
                css={[underlinedStyle]}
                activeClassName="active"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <MenuItemEffect>{t("header.links.about")}</MenuItemEffect>
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to="/mine"
                css={[underlinedStyle]}
                activeClassName="active"
                className="relative block px-4 py-2 overflow-hidden"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <MenuItemEffect>{t("header.links.mine")}</MenuItemEffect>
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to="/hold"
                css={[underlinedStyle]}
                activeClassName="active"
                className="relative block px-4 py-2 overflow-hidden"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <MenuItemEffect>{t("header.links.hold")}</MenuItemEffect>
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to="/community"
                css={[underlinedStyle]}
                activeClassName="active"
                className="relative block px-4 py-2 overflow-hidden"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <MenuItemEffect>{t("header.links.community")}</MenuItemEffect>
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink
                to="/business"
                css={[underlinedStyle]}
                activeClassName="active"
                className="relative block px-4 py-2 overflow-hidden"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <MenuItemEffect>{t("header.links.business")}</MenuItemEffect>
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                id="headway-link"
                css={[underlinedStyle]}
                className="relative block px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <MenuItemEffect>{t("header.links.updates")}</MenuItemEffect>
              </a>
            </MenuItem>
          </MenuList>
          <LanguageMenu />
        </div>
      </nav>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTrans(Header)
