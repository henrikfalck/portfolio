import React from "react"
import Wrapper from "../wrapper"
import "./FrontpageHero.scss"
const FrontpageHero = () => (
  <section className="hero">
    <Wrapper width={1440}>
      <h1 className="display desktop">
        <span>Faglært mediegrafiker</span>
        <br />
        <span>med fokus på UI og</span>
        <br />
        <span>front end-utvikling.</span>
      </h1>
      <h1 className="display tablet">
        <span>Faglært mediegrafiker</span>
        <br />
        <span>med fokus på UI</span>
        <br />
        <span>og front end-utvikling.</span>
      </h1>
    </Wrapper>
  </section>
)

export default FrontpageHero
