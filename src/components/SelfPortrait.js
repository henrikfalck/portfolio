import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SelfPortrait = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "henrik.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      className="portrait"
      loading="eager"
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

export default SelfPortrait
