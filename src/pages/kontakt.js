import React from "react"
import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import SEO from "../components/seo"
const ContactPage = () => (
  <Layout>
    <SEO
      title="Kontakt meg"
      description="Henrik Falck Mentzoni er en faglært mediegrafiker som fokuserer på UI-design og front-end utvikling."
    />
    <section className="contact-page">
      <Wrapper width={1440} center>
        <h1 className="display">Kontakt</h1>
        <p>
          Vil du ta en kaffe? Kanskje snakke om et kult prosjekt du vil ha
          gjennomført? Send meg en epost på{" "}
          <a href="mailto:hei@henrikfalck.no">hei@henrikfalck.no</a>, så snakkes
          vi{" "}
          <span role="image" aria-label="emoji">
            🤙
          </span>
        </p>
      </Wrapper>
    </section>
  </Layout>
)

export default ContactPage
