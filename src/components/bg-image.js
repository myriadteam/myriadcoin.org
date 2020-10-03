import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import tw from "twin.macro"

const BgImage = ({ filename, children, style }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 90, maxWidth: 2048) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n =>
        n.node.relativePath.includes(filename)
      )
      if (!image) {
        return null
      }
      const imageData = image.node.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" fluid={imageData} tw="bg-cover">
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BgImage
