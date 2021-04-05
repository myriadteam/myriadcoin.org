import React from "react"
import { useTranslation } from "react-i18next"
import Link from "./link"
import tw from "twin.macro"

const links = {
  mine: "/mine",
  hold: "/hold",
  community: "#community",
}

const Links = ({ skip = [] }) => {
  const { t } = useTranslation()
  return (
    <ul>
      {Object.entries(links).map(([link, url]) => {
        if(skip.includes(link)) {
          return null
        } else {
        return (  <li tw="flex mb-10" key={`key-${link}`}>
            <Link
              uri={url}
              tw="font-bold text-md sm:text-2xl leading-extra-tight"
              showArrow
            >
              {t(`home.links.${link}`)}
            </Link>
          </li>)
        }
      }
      )}
    </ul>
  )
}

export default Links
