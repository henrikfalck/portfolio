import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Joke from "../components/Joke"

const JokePage = ({ joke }) => (
  <Layout>
    <SEO title="Vits" description="En tilfeldig designer-vits" />
    <section className="joke-container">
      <h1>
        <Joke />
      </h1>
    </section>
  </Layout>
)

export default JokePage
