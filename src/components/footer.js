import React from "react"
import { ExternalLink } from "../components/links"

const Footer = () => (
  <footer>
    <div className="contact">
      <h1>Vil du ta en kaffe?</h1>
      <h5>
        <a href="mailto:hallo@henrikfalck.no">
          hallo@henrikfalck.no
          <span className="call-me" role="img" aria-label="Vi sees">
            {" "}
            🤙
          </span>
        </a>
      </h5>
    </div>
    <div className="bottom-row">
      <div className="copyright">
        <p>© {new Date().getFullYear()}. Ikke stjel, er du snill.</p>
      </div>
      <div className="social-links">
        <ExternalLink
          to="https://behance.net/henrikfalck"
          aria="Lenke til Behance, åpner i nytt vindu"
        >
          Behance
        </ExternalLink>
        <ExternalLink
          to="https://dribbble.com/henrikfalck"
          aria="Lenke til Dribbble, åpner i nytt vindu"
        >
          Dribbble
        </ExternalLink>
        <ExternalLink
          to="https://github.com/henrikfalck"
          aria="Lenke til Github, åpner i nytt vindu"
        >
          Github
        </ExternalLink>
        <ExternalLink
          to="https://instagram.com/henrikfalck_"
          aria="Lenke til Instagram, åpner i nytt vindu"
        >
          Instagram
        </ExternalLink>
        <ExternalLink
          to="https://www.linkedin.com/in/henrik-falck/"
          aria="Lenke til LinkedIn, åpner i nytt vindu"
        >
          LinkedIn
        </ExternalLink>
      </div>
      <div className="made-with">
        <p>
          Designet i Sketch, utviklet i{" "}
          <ExternalLink
            to="https://www.gatsbyjs.org"
            aria="Lenke til GatsbyJS, åpner i nytt vindu"
          >
            GatsbyJS
          </ExternalLink>{" "}
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
