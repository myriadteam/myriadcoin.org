import React from "react"
import tw, { css } from "twin.macro"
import { Link as GatsbyLink } from "gatsby"
import IconArrow from "../../svgs/icons/arrow-forward.inline.svg"

function Link({ children, uri, showArrow, noUnderline, ...props }) {
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

  const style = tw`hover:text-purple transition ease-in duration-150 underline`
  const noUnderlineStyle = noUnderline && tw`no-underline`

  if (uri.indexOf("http") === 0) {
    return (
      <a
        href={uri}
        css={[style, noUnderlineStyle]}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {renderContent()}
      </a>
    )
  }

  return (
    <GatsbyLink to={uri} css={[style, noUnderlineStyle]} {...props}>
      {renderContent()}
    </GatsbyLink>
  )
}

export default Link
