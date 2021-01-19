import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import LanguageMenu from "./language-menu"
import tw from "twin.macro"
import { withTrans } from "../i18n/withTrans"

const HeaderContainer = tw.header`container flex justify-between py-8 px-8 sm:px-8 text-sm`
const MenuList = tw.ul`flex items-center flex-col sm:flex-row`
const MenuItem = tw.li``

const Header = ({ siteTitle, t, i18n }) => (
  <HeaderContainer>
    <h2>
      <Link
        to="/"
        title={siteTitle}
        aria-label={`Visit ${siteTitle} (opens in a new window)`}
        className="flex items-center justify-center"
      >
        <Image filename="logo@3x.png" className="w-8 mr-2" alt="Myriad logo" />
        <span tw="hidden sm:inline">Myriad</span>
      </Link>
    </h2>
    <button
      type="button"
      class="sm:hidden block text-gray-500 hover:text-white focus:text-white focus:outline-none"
    >
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path
          v-if="isOpen"
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
        <path
          v-if="!isOpen"
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
    <div className="flex">
      <MenuList>
        <MenuItem>
          <Link to="/about" className="px-4 py-2">
            {t("navigation.links.about")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/mine" className="px-4 py-2">
            {t("navigation.links.mine")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/hold" className="px-4 py-2">
            {t("navigation.links.hold")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/community" className="px-4 py-2">
            {t("navigation.links.community")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/business" className="px-4 py-2">
            {t("navigation.links.business")}
          </Link>
        </MenuItem>
        <LanguageMenu />
      </MenuList>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTrans(Header)
