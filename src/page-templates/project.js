import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { IconExternalLink } from "../components/icons"
import ProjectContent from "../components/ProjectContent/index"

// Styles
import "../components/ProjectHero/ProjectHero.scss"

const ProjectTemplate = () => {
  const data = useStaticQuery(graphql`
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
              fluid(
                webpQuality: 100
                toFormat: WEBP
                fit: COVER
                maxWidth: 2560
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.acf.client}
        description={data.wordpressPost.acf.work_title}
      />
      <section className="project-hero">
        <Img
          className="project-hero--img"
          fluid={
            data.wordpressPost.featured_media.localFile.childImageSharp.fluid
          }
          loading="lazy"
          alt={data.wordpressPost.title}
        />
        <div className="project-hero--information-box">
          <h1>{data.wordpressPost.acf.project_title}</h1>
          <div className="project-hero--additional-info">
            <div className="client">
              <h6>Laget for</h6>
              <a
                className="external-link"
                rel="noopener noreferrer"
                target="_blank"
                href={data.wordpressPost.acf.client_website}
              >
                <p>
                  {data.wordpressPost.acf.client}
                  <IconExternalLink />
                </p>
              </a>
            </div>
            <div className="categories">
              <h6>Arbeidstype</h6>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.wordpressPost.acf.categories,
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>
      <ProjectContent text={data.wordpressPost.content}>
        {data.wordpressPost.acf.project_images.localFile.map(item => (
          <Img key={item.id} fluid={item.childImageSharp.fluid} />
        ))}
      </ProjectContent>
    </Layout>
  )
}

export default ProjectTemplate
