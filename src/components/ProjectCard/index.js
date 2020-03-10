import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./ProjectCard.scss"
const ProjectCard = ({ client, slug, img, year, categories }) => (
  <div className="project-card" data-sal="fade">
    <Link to={slug}>
      <Img
        className="project--featured-media"
        fluid={img}
        loading="lazy"
        alt={client}
        objectPosition="50% 50%"
        placeholderStyle={{ backgroundColor: "#242424" }}
      />
      <div className="project--information">
        <h2>{client}</h2>
        <div className="right">
          <p>{year}</p>
          <p>{categories}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default ProjectCard
