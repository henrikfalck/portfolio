import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./ProjectCard.scss"
const ProjectCard = ({ title, client, slug, img, categories }) => (
  <div className="project-card">
    <Link to={slug}>
      <Img
        className="project--featured-media"
        fluid={img}
        loading="lazy"
        alt={title}
      />
      <div className="project--information">
        <h6>
          <span>{client}</span>
          <span className="divider">{" — "}</span>
          <span>{categories}</span>
        </h6>
        <h1>{title}</h1>
      </div>
    </Link>
  </div>
)

export default ProjectCard
