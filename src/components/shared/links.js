import React from "react"
import { useTranslation } from "react-i18next"
import LinkWithHover from "../link-with-hover"
import iconArrow from "../../svgs/icons/arrow-forward.svg"
import tw from "twin.macro"

const links = ["mine", "hold", "business", "community"]

const Links = ({ skip = [] }) => {
  const { t } = useTranslation()
  const linksToShow = skip ? links.filter(link => !skip.includes(link)) : links
  return (
    <ul>
      {linksToShow.map(link => (
        <li tw="flex mb-10" key={`key-${link}`}>
          <LinkWithHover to={`${link}`} variant="mediumBold">
            {t(`home.links.${link}`)}
          </LinkWithHover>
          <img src={iconArrow} alt=">" />
        </li>
      ))}
    </ul>
  )
}

export default Links
