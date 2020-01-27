import React from "react"
import Img from "gatsby-image"
import { PrimaryButton } from "../Buttons/buttons"
import { IconExternalLink } from "../icons"
import "./ProjectHero.scss"

const ProjectHero = (img, alt, client, clienturl, categories, title) => (
  <section className="project-hero">
    <Img className="project-hero--img" fluid={img} loading="lazy" alt={alt} />
    <div className="project-hero--information-box">
      <h1>{title}</h1>
      <div className="project-hero--additional-info">
        <div className="client">
          <h6>Laget for</h6>
          <a
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            href={clienturl}
          >
            <p>
              {client}
              <IconExternalLink />
            </p>
          </a>
        </div>
        <div className="categories">
          <h6>Arbeidstype</h6>
          <p>{categories}</p>
        </div>
        if (condition) {}
      </div>
    </div>
  </section>
)

export default ProjectHero
