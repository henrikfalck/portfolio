import React from "react"
import Layout from "../components/layout"
import FrontpageHero from "../components/FrontpageHero/index"
import { Grid } from "../components/Projects"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO
      title="Prosjekter"
      description="Henrik Falck Mentzoni er en faglært mediegrafiker som fokuserer på UI-design og front-end utvikling."
    />
    <FrontpageHero />
    <Grid />
  </Layout>
)

export default IndexPage
