import React from "react"
import Img from "gatsby-image"

import "./ProjectHero.scss"

const Hero = ({ img, alt }) => (
  <section className="project-hero">
    <Img className="project-hero--img" fluid={img} alt={alt} loading="eager" />
  </section>
)

export default Hero
