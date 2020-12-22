/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { withTrans } from "../i18n/withTrans"
import tw from "twin.macro"

import { XmyBlocksContext } from "../common/contexts"

import Header from "../components/header"
import Footer from "../components/footer"

const BodyContainer = tw.div`font-body font-semibold`

const Layout = ({ children, t, i18n }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <XmyBlocksContext.Provider value={3177528}>
      <BodyContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </BodyContainer>
    </XmyBlocksContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withTrans(Layout)
