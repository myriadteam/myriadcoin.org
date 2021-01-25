import React from "react"
import { useTranslation } from "react-i18next"
import Link from "./link"
import tw from "twin.macro"

const links = ["mine", "hold", "community"]

const Links = ({ skip = [] }) => {
  const { t } = useTranslation()
  const linksToShow = skip ? links.filter(link => !skip.includes(link)) : links
  return (
    <ul>
      {linksToShow.map(link => (
        <li tw="flex mb-10" key={`key-${link}`}>
          <Link
            uri={`/${link}`}
            tw="font-bold text-md sm:text-2xl leading-extra-tight"
            showArrow
          >
            {t(`home.links.${link}`)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Links
