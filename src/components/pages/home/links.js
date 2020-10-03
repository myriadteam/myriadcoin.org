import React from "react"
import LinkWithHover from "../../link-with-hover"
import iconArrow from "../../../svgs/icons/arrow-forward.svg"
import { withTrans } from "../../../i18n/withTrans"
import tw from "twin.macro"

const links = ["mine", "hold", "business", "community"]

const HomeLinks = ({ t, i18n }) => {
  return (
    <ul>
      {links.map(link => (
        <li tw="flex mb-10" key={`key-${link}`}>
          <LinkWithHover to={`/${link}`} variant="mediumBold">
            {t(`home.links.${link}`)}
          </LinkWithHover>
          <img src={iconArrow} alt=">" />
        </li>
      ))}
    </ul>
  )
}

export default withTrans(HomeLinks)
