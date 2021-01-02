import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Image from "./image"
import LanguageMenu from "./language-menu"
import tw from "twin.macro"
import { withTrans } from "../i18n/withTrans"

const HeaderContainer = tw.header`container flex justify-between py-8 px-8 sm:px-0 text-xxs`
const MenuList = tw.ul`text-xxs`
const MenuItem = tw.li`block mr-0 mt-4 text-center sm:text-left sm:inline-block sm:mt-0 sm:mr-4`

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
          <Image
            filename="logo@3x.png"
            className="w-8 mr-2"
            alt="Myriad logo"
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
              <Link
                to="/about"
                className="px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {t("header.links.about")}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/mine"
                className="px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {t("header.links.mine")}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/hold"
                className="px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {t("header.links.hold")}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/community"
                className="px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {t("header.links.community")}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/business"
                className="px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {t("header.links.business")}
              </Link>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                id="headway-link"
                className="relative px-4 py-2"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                {t("header.links.updates")}
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
