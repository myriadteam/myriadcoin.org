import React from "react"
import { useTranslation } from "react-i18next"
import LinkWithHover from "../link-with-hover"
import ArrowForward from "../../svgs/icons/arrow-forward.inline.svg"
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
          <ArrowForward tw="w-10 sm:w-auto" />
        </li>
      ))}
    </ul>
  )
}

export default Links
