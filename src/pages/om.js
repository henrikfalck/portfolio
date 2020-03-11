import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExternalLink } from "../components/links"
import SelfPortrait from "../components/SelfPortrait"
import { Music, Bucketlist } from "../components/Interests/index"
import Wrapper from "../components/wrapper"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Om"
      description="Henrik Falck Mentzoni er en faglært mediegrafiker som fokuserer på UI-design og front-end utvikling."
    />
    <section className="about-page">
      <Wrapper width={1920}>
        <div className="content">
          <p>
            Jeg heter Henrik Falck Mentzoni, og er en frilans UI-designer og
            front end-utvikler, har tidligere vært med i{" "}
            <ExternalLink
              to="https://thedesignersleague.co"
              aria="The Designers League"
            >
              The Designers League
            </ExternalLink>
            , og vært en av skaperne bak{" "}
            <ExternalLink to="https://weekly.design" aria="Weekly Design">
              Weekly Design
            </ExternalLink>{" "}
            og{" "}
            <ExternalLink to="https://jobsfordesigners.com">
              Jobs For Designers
            </ExternalLink>
            .
            {/* <br />
          <br />
          Sommeren 2020 flyttet jeg og kjæresten til Oslo, hvor jeg nå tar
          bachelor i grafisk design ved Høyskolen Kristiania. */}
            <br />
            <br />
            Formgivning er noe jeg har vært glad i siden jeg var liten –
            utallige tegneblokker er gått gjennom, og bygging med Lego var et
            daglig rituale i barndommen. Det var ikke før jeg begynte på medier
            og kommunikasjonslinja på videregående skole at jeg kjente at det
            var dette jeg ville gjøre.
            <br />
            <br />
            Dette fulgte jeg opp med å ta svennebrev i Mediegrafikerfaget. Det
            var i denne tiden interessen for koding kom fram, med Material
            Design Lite og Dreamweaver (du leste riktig, Dreamweaver) som
            startslinjen min med HTML og ekstern CSS, blandet med en liten dæsj
            hjemmekokt CSS som ikke fungerte fordi jeg hadde glemt å importere
            det (tok meg faktisk et par dager å finne ut den delen), klassenavn
            og id-er på norsk og selectors som ikke eksisterte andre plasser enn
            i hodet mitt.
            <br />
            <br />
            Nå har jeg heldigvis ikke de samme problemene, jobber i VS Code og
            primært i ReactJS.
          </p>
          <SelfPortrait />
        </div>
      </Wrapper>
      <Music />
      <Bucketlist />
    </section>
  </Layout>
)

export default AboutPage
