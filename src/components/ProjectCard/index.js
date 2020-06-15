import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./ProjectCard.scss"
import NewPost from "../NewPost"
const ProjectCard = ({ client, slug, img, year, categories, id }) => {
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

export default ProjectCard
