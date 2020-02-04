import React, { Component } from "react"
import Logo from "../brand-components/logo"
// import { Link } from "gatsby"
import { AnimatedLink } from "./links"

export default class Header extends Component {
  render() {
    return (
      <header>
        <AnimatedLink to="/" aria="Forside og prosjekter">
          <Logo />
        </AnimatedLink>
        <nav className="navigation">
          <ul>
            <li className="navigation--link">
              <AnimatedLink to="/" aria="Forside og prosjekter">
                Prosjekter
              </AnimatedLink>
            </li>
            <li className="navigation--link">
              <AnimatedLink to="/om" aria="Om meg">
                Om
              </AnimatedLink>
            </li>
            <li className="navigation--link">
              <AnimatedLink to="/kontakt" aria="Kontakt meg">
                Kontakt
              </AnimatedLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
