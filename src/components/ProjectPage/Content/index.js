import React from "react"

// Styles
import "./Content.scss"

const Content = ({ children, content }) => (
  <article
    className="project-content"
    dangerouslySetInnerHTML={{ __html: content }}
  ></article>
)

export default Content
