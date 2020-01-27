import React from "react"
import Wrapper from "../wrapper"
import "./ProjectContent.scss"

export const ProjectText = ({ content }) => (
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
)
