import React from "react"
import Wrapper from "../components/wrapper"
// import { InternalPrimaryButton } from "../components/Buttons/buttons"
import Header from "../components/header"
import "../style/layout/_error.scss"
import "../components/Buttons/buttons.scss"
import { AnimatedLink } from "../components/links"

const ErrorPage = () => (
  <>
    <Header />
    <section className="error">
      <Wrapper width={1440} center>
        <h6>#404 — side ikke funnet</h6>
        <h1 className="display">Her har det skjedd en feil.</h1>
        <p>Dette er egentlig litt pinlig, heh...</p>
        <AnimatedLink to="/">
          <button
            className="button-primary"
            title="Tilbake-knapp"
            aria-label="Gå tilbake til forsiden"
          >
            Gå til forsiden
          </button>
        </AnimatedLink>
      </Wrapper>
    </section>
  </>
)

export default ErrorPage
