import React from "react"
import Wrapper from "../components/wrapper"
// import { InternalPrimaryButton } from "../components/Buttons/buttons"
import Header from "../components/header"
import "../style/layout/_error.scss"
import "../components/Buttons/buttons.scss"
import { Link } from "gatsby"

const ErrorPage = () => (
  <>
    <Header />
    <section className="error">
      <Wrapper width={1440} center>
        <h5>#404 — side ikke funnet</h5>
        <h1 className="display">Her har det skjedd en feil.</h1>
        <p>Dette er egentlig litt pinlig, heh...</p>
        <Link to="/">
          <button
            className="button-primary"
            title="Tilbake-knapp"
            aria-label="Gå tilbake til forsiden"
          >
            Gå til forsiden
          </button>
        </Link>
      </Wrapper>
    </section>
  </>
)

export default ErrorPage
