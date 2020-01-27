import React, { Component } from "react"
import Logo from "../brand-components/logo"
import { Link } from "gatsby"
export default class Header extends Component {
  render() {
    return (
      <header>
        <Link>
          <Logo />
        </Link>
        <nav className="navigation desktop">
          <ul>
            <li className="navigation--link">
              <Link to="/">Prosjekter</Link>
            </li>
            <li className="navigation--link">
              <Link to="/om">Om</Link>
            </li>
            <li className="navigation--link">
              <Link to="kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
