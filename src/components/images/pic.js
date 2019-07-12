import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Pic = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gaston-garcia-foto.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className="rounded w-3/6 mb-5"
      />
    )}
  />
)
export default Pic
