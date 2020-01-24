import React from "react"
import { ExternalLink } from "../Links/links"
import "./MadeBy.scss"

const MadeBy = () => (
  <div className="made-by">
    Design og utvikling:{" "}
    <ExternalLink to="https://henrikfalck.no">
      Henrik Falck Mentzoni
    </ExternalLink>
  </div>
)

export default MadeBy
