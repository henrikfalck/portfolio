import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import ProjectContent from "../components/ProjectContent/index"

// Styles
import "../components/ProjectHero/ProjectHero.scss"

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.acf.client}
        description={data.wordpressPost.acf.work_title}
      />
      <section className="project-hero">
        <div className="information">
          <h3>{data.wordpressPost.title}</h3>
          <h1 className="display">{data.wordpressPost.acf.project_title}</h1>
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
      <ProjectContent text={data.wordpressPost.content}>
        {data.wordpressPost.acf.project_images.map(item => (
          <Img
            key={item.localFile.id}
            fluid={item.localFile.childImageSharp.fluid}
            loading="eager"
          />
        ))}
      </ProjectContent>
    </Layout>
  )
}

export default ProjectTemplate

export const PROJECTQUERY = graphql`
  query($id: Int) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      acf {
        categories
        client
        client_website
        project_url
        project_title
        project_images {
          slug
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              id
            }
          }
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(webpQuality: 100, toFormat: PNG, fit: COVER, maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
