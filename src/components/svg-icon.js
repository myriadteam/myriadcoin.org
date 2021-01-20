import React from "react"
import tw, { styled } from "twin.macro"
import IconDiscord from "../svgs/icons/discord.inline.svg"
import IconFacebook from "../svgs/icons/facebook.inline.svg"
import IconGithub from "../svgs/icons/reddit.inline.svg"
import IconInstagram from "../svgs/icons/instagram.inline.svg"
import IconReddit from "../svgs/icons/reddit.inline.svg"
import IconTelegram from "../svgs/icons/telegram.inline.svg"
import IconTwitter from "../svgs/icons/twitter.inline.svg"
import IconSlack from "../svgs/icons/slack.inline.svg"

const icons = {
  discord: IconDiscord,
  facebook: IconFacebook,
  github: IconGithub,
  instagram: IconInstagram,
  reddit: IconReddit,
  telegram: IconTelegram,
  twitter: IconTwitter,
  slack: IconSlack,
}

const styleMap = {
  sm: tw`w-4 h-4`,
  base: tw`w-8 h-8`,
  md: tw`w-12 h-12`,
  lg: tw`w-10 h-10 sm:w-14 sm:h-14`,
}

const getStyleName = ({ size }) => styleMap[size] || styleMap.base
const getIcon = name => {
  return icons[name.replace(/\s+/g, "-").toLowerCase()]
}

const Svg = styled.svg(getStyleName)

const SvgIcon = ({ name, size = "base" }) => {
  return (
    <Svg
      size={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {React.createElement(getIcon(name), {})}
    </Svg>
  )
}

export default SvgIcon
