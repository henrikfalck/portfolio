import React from "react"

// Styles
import "./ProjectContent.scss"

const ProjectContent = ({ children, content }) => (
  <article
    className="project-content"
    dangerouslySetInnerHTML={{ __html: content }}
  ></article>
)

export default ProjectContent
