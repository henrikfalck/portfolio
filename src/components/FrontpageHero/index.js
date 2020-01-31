import React from "react"
import Wrapper from "../wrapper"
import "./FrontpageHero.scss"
const FrontpageHero = () => (
  <section className="hero">
    <Wrapper width={1440}>
      <h1 className="display desktop no-motion">
        <span>Faglært mediegrafiker</span>
        <br />
        <span>med fokus på UI og</span>
        <br />
        <span>frontend-utvikling.</span>
      </h1>
      <h1 className="display tablet no-motion">
        <span>Faglært</span>
        <br />
        <span>mediegrafiker</span>
        <br />
        <span>med fokus på UI</span>
        <br />
        <span>og frontend-</span>
        <br />
        <span>utvikling.</span>
      </h1>
    </Wrapper>
  </section>
)

export default FrontpageHero
