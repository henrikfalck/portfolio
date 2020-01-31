import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectCard from "../ProjectCard/index"
import Wrapper from "../wrapper"

import "./ProjectGrid.scss"

const ProjectGrid = () => (
  <StaticQuery
    query={graphql`
      query PROJECTGRID_QUERY {
        allWordpressPost {
          edges {
            node {
              acf {
                categories
                client
                project_title
              }
              slug
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(toFormat: WEBP, webpQuality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="project-grid">
        <Wrapper width={1440}>
          {data.allWordpressPost.edges.map(item => (
            <ProjectCard
              slug={`/${item.node.slug}`}
              title={item.node.acf.project_title}
              client={item.node.acf.client}
              categories={item.node.acf.categories}
              img={item.node.featured_media.localFile.childImageSharp.fluid}
            />
          ))}
        </Wrapper>
      </section>
    )}
  />
)

export default ProjectGrid
