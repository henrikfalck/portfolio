import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Content from "../components/ProjectPage/Content"

// Styles
import "../components/ProjectPage/Hero/ProjectHero.scss"

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.acf.work_title}
      />
      <section className="project-hero">
        <div className="information">
          <h3>{data.wordpressPost.title}</h3>
          <h1>{data.wordpressPost.acf.project_title}</h1>
        </div>
        <Img
          className="project-hero--img"
          fluid={
            data.wordpressPost.featured_media.localFile.childImageSharp.fluid
          }
          loading="eager"
          alt={data.wordpressPost.title}
        />
      </section>
      <Content content={data.wordpressPost.content} />
    </Layout>
  )
}

export default ProjectTemplate

export const PROJECTQUERY = graphql`
  query($id: Int) {
    wordpressPost(wordpress_id: { eq: $id }) {
      wordpress_id
      title
      content
      acf {
        categories
        client
        project_title
      }
      featured_media {
        localFile {
          id
          childImageSharp {
            fluid(toFormat: PNG, quality: 100, maxHeight: 2560) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
