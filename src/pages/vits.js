import React from "react"
import Header from "../components/header"
import SEO from "../components/seo"
import Joke from "../components/Joke"

const JokePage = () => (
  <>
    <Header />
    <SEO title="Vits" description="En tilfeldig designer-vits" />
    <section className="joke-container">
      <Joke />
    </section>
  </>
)

export default JokePage
