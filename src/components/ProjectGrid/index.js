import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectCard from "../ProjectCard/index"

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
              }
              date(formatString: "YYYY")
              id
              slug
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(toFormat: PNG, quality: 100, maxHeight: 2560) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className="project-grid">
        <h2>Prosjekter</h2>
        {data.allWordpressPost.edges.map((item) => (
          <ProjectCard
            id={item.node.id}
            slug={`/${item.node.slug}`}
            client={item.node.acf.client}
            year={item.node.date}
            categories={item.node.acf.categories}
            img={item.node.featured_media.localFile.childImageSharp.fluid}
          />
        ))}
      </section>
    )}
  />
)

export default ProjectGrid
