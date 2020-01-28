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
    <Wrapper width={1440} center>
      <h1>Hei på deg!</h1>
    </Wrapper>
  </Layout>
)

export default ContactPage
