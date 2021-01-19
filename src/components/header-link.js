import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

export default function Link(props) {
  const { className, activeClassName, children } = props

  return (
    <GatsbyLink
      {...props}
      getProps={({ isPartiallyCurrent }) => ({
        className: [className, isPartiallyCurrent ? activeClassName : ""]
          .join(" ")
          .trim(),
      })}
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Link.defaultProps = {
  activeClassName: "active",
  className: "",
}
