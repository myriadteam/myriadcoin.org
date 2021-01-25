import React from "react"
import tw from "twin.macro"
import { Link as GatsbyLink } from "gatsby"
import IconArrow from "../../svgs/icons/arrow-forward.inline.svg"

function Link({ children, uri, showArrow, ...props }) {
  const renderContent = () => {
    return (
      <>
        {children}
        {showArrow && (
          <IconArrow
            tw="inline align-middle"
            style={{ marginLeft: "0.28em", marginBottom: "0.1em" }}
          />
        )}
      </>
    )
  }

  if (uri.indexOf("http") === 0) {
    return (
      <a
        href={uri}
        tw="hover:text-purple underline transition ease-in duration-150"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {renderContent()}
      </a>
    )
  }

  return (
    <GatsbyLink
      to={uri}
      tw="hover:text-purple underline transition ease-in duration-150"
      {...props}
    >
      {renderContent()}
    </GatsbyLink>
  )
}

export default Link
