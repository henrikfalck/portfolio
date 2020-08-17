import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import NewPost from "./NewPost"
import "./Card.scss"
import "./Grid.scss"

export const Card = ({ client, fromNow, slug, img, year, categories, id }) => {
  return (
    <div className="project-card" data-sal="fade" key={id}>
      <Link to={slug}>
        {fromNow === "1 month ago" ? <NewPost /> : null}
        <Img
          className="project--featured-media"
          fluid={img}
          loading="lazy"
          alt={client}
          objectPosition="50% 50%"
        />
        <div className="project--information">
          <h3>{client}</h3>
          <div className="right">
            <p>{year}</p>
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
        allWordpressPost(limit: 6, sort: { fields: date, order: DESC }) {
          edges {
            node {
              acf {
                categories
                client
              }
              postDate: date(fromNow: true)
              date(formatString: "YYYY")
              id
              slug
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(quality: 100, maxHeight: 2560) {
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
            fromNow={item.node.postDate}
            categories={item.node.acf.categories}
            img={item.node.featured_media.localFile.childImageSharp.fluid}
          />
        ))}
      </section>
    )}
  />
)
