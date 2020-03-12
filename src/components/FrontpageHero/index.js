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
        <span>Mediegrafiker</span> <span>med</span> <span>fokus</span>{" "}
        <span>på</span> <span>UI</span> <span>og</span> <span>frontend-</span>
        <span>utvikling.</span>
      </h1>
    </Wrapper>
  </section>
)

export default FrontpageHero
