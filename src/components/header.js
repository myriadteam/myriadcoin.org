import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import LanguageMenu from "./language-menu"
import tw from "twin.macro"
import { withTrans } from "../i18n/withTrans"

const HeaderContainer = tw.header`container flex justify-between py-8 text-sm`
const MenuList = tw.ul`flex items-center`
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
        Myriad
      </Link>
    </h2>
    <div className="flex">
      <MenuList>
        <MenuItem>
          <Link to="/about" className="px-4 py-2">
            {t("header.links.about")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/mine" className="px-4 py-2">
            {t("header.links.mine")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/hold" className="px-4 py-2">
            {t("header.links.hold")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/community" className="px-4 py-2">
            {t("header.links.community")}
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/business" className="px-4 py-2">
            {t("header.links.business")}
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
