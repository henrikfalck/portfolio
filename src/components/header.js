import React, { Component } from "react"
import Logo from "../brand-components/logo"
import { Link } from "gatsby"

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/" aria-label="Lenke til forsiden">
          <Logo />
        </Link>
        <nav className="navigation">
          <ul>
            <li className="navigation--link">
              <Link to="/">Prosjekter</Link>
            </li>
            <li className="navigation--link">
              <Link to="/om">Om meg</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
