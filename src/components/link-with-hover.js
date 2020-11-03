import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

const styleMap = {
  mediumBold: tw`font-bold text-md sm:text-lg leading-extra-tight`,
  default: tw`inline-flex font-normal leading-tight sm:text-md`,
}

const underlinedStyle = css`
  & {
    position: relative;
    overflow: hidden;
  }
  &:after {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      )
      center 1.08em / 100% 2px no-repeat;

    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 400%;
    will-change: transform;
    z-index: -1;
  }

  &:hover:after {
    animation: underline-gradient 6s linear infinite;
    background-image: linear-gradient(
      90deg,
      rgba(255, 138, 0, 1) 15%,
      rgba(223, 133, 255, 1) 35%,
      rgba(255, 138, 0, 1) 85%
    );
  }

  @keyframes underline-gradient {
    0% {
      transform: translate3d(0%, 0%, 0);
    }
    100% {
      transform: translate3d(-75%, 0%, 0);
    }
  }
`

const LinkWithHover = ({ children, to, variant = "default" }) => {
  return (
    <Link to={`/${to}`} css={[underlinedStyle, styleMap[variant]]}>
      {children}
    </Link>
  )
}

export default LinkWithHover
