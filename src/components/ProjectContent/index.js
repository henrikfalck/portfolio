import React from "react"

// Styles
import "./ProjectContent.scss"

const ProjectContent = ({ children, content }) => (
  <section className="project-content">
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </section>
)

export default ProjectContent
