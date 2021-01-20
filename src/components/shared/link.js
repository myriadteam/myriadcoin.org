import React from "react"
import tw from "twin.macro"
import { Link as GatsbyLink } from "gatsby"

function Link({ children, uri, ...props }) {
  if (uri.indexOf("http") === 0) {
    return (
      <a
        href={uri}
        tw="hover:text-purple underline transition ease-in duration-150 "
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink
      to={uri}
      tw="hover:text-purple underline transition ease-in duration-150 "
      {...props}
    >
      {children}
    </GatsbyLink>
  )
}

export default Link
