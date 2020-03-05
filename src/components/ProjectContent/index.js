import React from "react"
import Wrapper from "../wrapper"

// Styles
import "./ProjectContent.scss"

const ProjectContent = ({ children, text }) => (
  <section className="project-content">
    <div
      className="project-content--text sa-animate"
      dangerouslySetInnerHTML={{ __html: text }}
    ></div>
    <div className="project-content--images">{children}</div>
  </section>
)

export default ProjectContent
