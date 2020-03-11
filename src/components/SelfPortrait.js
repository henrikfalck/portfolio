import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SelfPortrait = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headshot-test.jpg" }) {
        childImageSharp {
          fluid(toFormat: PNG, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="portrait">
        <Img loading="eager" fluid={data.file.childImageSharp.fluid} />
        <p>
          <span className="arrow">↑</span> Bilde: Alo Uten Like
        </p>
      </div>
    </>
  )
}

export default SelfPortrait
