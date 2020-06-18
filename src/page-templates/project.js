import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/ProjectPage/Hero"
import Content from "../components/ProjectPage/Content"

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.acf.work_title}
      />
      <Hero
        img={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
        alt={data.wordpressPost.title}
      />
      <Content
        title={data.wordpressPost.acf.project_title}
        content={data.wordpressPost.content}
        client={data.wordpressPost.acf.client}
        categories={data.wordpressPost.acf.categories}
        date={data.wordpressPost.date}
      />
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
      date(formatString: "YYYY")
      acf {
        categories
        client
        project_title
      }
      featured_media {
        localFile {
          id
          childImageSharp {
            fluid(toFormat: WEBP, quality: 100, maxHeight: 2560) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
