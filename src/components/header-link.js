import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

export default function Link(props) {
  const { exact, className, activeClassName, children } = props

  return (
    <GatsbyLink
      {...props}
      getProps={({ isCurrent, isPartiallyCurrent }) => ({
        className: [
          className,
          exact && isCurrent ? activeClassName : "",
          !exact && isPartiallyCurrent ? activeClassName : "",
        ]
          .join(" ")
          .trim(),
      })}
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  exact: PropTypes.bool,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Link.defaultProps = {
  exact: false,
  activeClassName: "active",
  className: "",
}
