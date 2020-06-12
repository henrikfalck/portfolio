import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./ProjectCard.scss"
const ProjectCard = ({ client, slug, img, year, categories, id }) => (
  <div className="project-card" data-sal="fade" key={id}>
    <Link to={slug}>
      <div className="new-project-indicator">
        <div className="new-project-indicator__border"></div>
        <span>Nytt prosjekt!</span>
      </div>
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
          <p>{year}</p>
          <p>{categories}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default ProjectCard
