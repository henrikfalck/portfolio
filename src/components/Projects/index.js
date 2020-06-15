import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import NewPost from "../NewPost"
import { StaticQuery, graphql } from "gatsby"

import "./Card.scss"
import "./Grid.scss"

export const Card = ({ client, slug, img, year, categories, id }) => {
  const postYear = year.slice(3, 7)

  return (
    <div className="project-card" data-sal="fade" key={id}>
      <Link to={slug}>
        <NewPost />
        <Img
          className="project--featured-media"
          fluid={img}
          loading="lazy"
          alt={client}
          objectPosition="50% 50%"
          placeholderStyle={{ backgroundColor: "#242424" }}
        />
        <div className="project--information">
          <h3>{client}</h3>
          <div className="right">
            <p>{postYear}</p>
            <p>{categories}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export const Grid = () => (
  <StaticQuery
    query={graphql`
      query PROJECTGRID_QUERY {
        allWordpressPost(limit: 6) {
          edges {
            node {
              acf {
                categories
                client
              }
              date(formatString: "MM.YYYY")
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
        <h2>Utvalgte prosjekter</h2>
        {data.allWordpressPost.edges.map((item) => (
          <Card
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
