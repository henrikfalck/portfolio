import React from "react"
import Wrapper from "../wrapper"

// Styles
import "./ProjectContent.scss"

/* export const ProjectText = ({ content }) => (
  <div className="project-text">
    <Wrapper width={768} center>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </Wrapper>
  </div>
)

export const ProjectMedia = ({ content }) => (
  <div
    className="project-media"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
) */

const ProjectContent = ({ children, text }) => (
  <section className="project-content">
    <Wrapper width={768} center>
      <div
        className="project-content--text"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </Wrapper>
    <div className="project-content--images">{children}</div>
  </section>
)

export default ProjectContent
