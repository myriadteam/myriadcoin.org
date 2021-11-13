import React, { useEffect, useState, useCallback } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import LanguageMenu from "./language-menu"
import HeaderLink from "./header-link"
import tw, { css } from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import logo from "../images/logo@3x.png"

const HeaderContainer = tw.header`container flex justify-between py-8 px-8  text-xxs`
const MenuList = tw.ul`text-xxs flex flex-col items-center sm:flex-row md:-mr-4 pb-4 sm:pb-0`
const MenuItem = tw.li`block mr-0 mt-4 text-center sm:mt-0 md:mr-4`

const Header = ({ siteTitle, t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = useCallback(() => setIsExpanded(c => !c), [])

  const closeExpansion = useCallback(() => {
    setIsExpanded(false)
  }, [])

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
            alt="Myriadcoin logo"
            width="32"
            height="32"
          />
          <h2 tw="tracking-tight">Myriadcoin</h2>
        </Link>
        <div className="block sm:hidden">
          <button
            onClick={toggleExpansion}
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
          tw="z-50 top-6 absolute left-0 bg-white dark:bg-dark-bg shadow sm:shadow-none sm:top-auto sm:left-auto sm:relative sm:bg-transparent w-full sm:flex flex-grow sm:items-center sm:w-auto sm:justify-end"
        >
          <MenuList>
            <MenuItem>
              <HeaderLink to="/about" onClick={closeExpansion}>
                {t("navigation.links.about")}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink to="/mine" onClick={closeExpansion}>
                {t("navigation.links.mine")}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink to="/hold" onClick={closeExpansion}>
                {t("navigation.links.hold")}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink to="/analytics" onClick={closeExpansion}>
                {t("navigation.links.analytics")}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <HeaderLink to="https://medium.com/myriadcoin" onClick={closeExpansion} target="_blank">
                {t("navigation.links.articles")}
              </HeaderLink>
            </MenuItem>
            <MenuItem>
              <LanguageMenu />
            </MenuItem>
          </MenuList>
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
