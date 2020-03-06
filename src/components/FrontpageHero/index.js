import React from "react"
import Wrapper from "../wrapper"
import "./FrontpageHero.scss"
const FrontpageHero = () => (
  <section className="hero">
    <Wrapper width={1920}>
      <h1
        className="display"
        aria-label="Mediegrafiker med fokus på UI-design og front end-utvikling"
      >
        Mediegrafiker med fokus på UI og frontend-utvikling.
      </h1>
    </Wrapper>
  </section>
)

export default FrontpageHero
