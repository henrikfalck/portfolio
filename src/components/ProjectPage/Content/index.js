import React from "react"

// Styles
import "./Content.scss"

const Content = ({ content, categories, client, date, title }) => (
  <>
    <h1 className="project-title">{title}</h1>
    <article className="project-content">
      <div className="project-content--information">
        <p className="project-content--information-block">{client}</p>
        <p className="project-content--information-block">{date}</p>
        <p className="project-content--information-block">{categories}</p>
      </div>
      <div
        className="project-content--content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  </>
)

export default Content
