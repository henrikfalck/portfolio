import React from "react"
import Wrapper from "../components/wrapper"
import { InternalPrimaryButton } from "../components/Buttons/buttons"
import Header from "../components/header"
import "../style/layout/_error.scss"

const ErrorPage = () => (
  <>
    <Header />
    <section className="error">
      <Wrapper width={1440} center>
        <h6>#404 — side ikke funnet</h6>
        <h1 className="display">Her har det skjedd en feil.</h1>
        <p>Dette er egentlig litt pinlig, heh...</p>
        <InternalPrimaryButton to="/" aria="Gå tilbake til forsiden">
          Gå tilbake til forsiden
        </InternalPrimaryButton>
      </Wrapper>
    </section>
  </>
)

export default ErrorPage
