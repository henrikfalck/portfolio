import React from "react"
import { ExternalLink } from "../Links/links"
import "./MadeBy.scss"

export const MadeBy = () => (
  <div className="made-by">
    Design og utvikling:{" "}
    <ExternalLink to="https://henrikfalck.no">
      Henrik Falck Mentzoni
    </ExternalLink>
  </div>
)

export const BuiltWith = () => (
  <div className="credits">
    Utviklet med{" "}
    <ExternalLink to="https://www.gatsbyjs.com/">GatsbyJS</ExternalLink>.
  </div>
)
