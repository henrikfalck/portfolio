import React, { Component } from "react"
// import Logo from "../brand-components/logo"
import { AnimatedLink } from "../Links"
export default class Header extends Component {
  render() {
    return (
      <header>
        <AnimatedLink>
          <Logo />
        </AnimatedLink>
        <nav className="navigation desktop">
          <ul>
            <li className="navigation--link">
              <AnimatedLink to="/">Hjem</AnimatedLink>
            </li>
            <li className="navigation--link">
              <AnimatedLink to="/om">Om</AnimatedLink>
            </li>
            <li className="navigation--link">
              <AnimatedLink to="kontakt">Kontakt</AnimatedLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
