import React from "react"
import { ExternalLink } from "../components/links"

const Footer = () => (
  <footer>
    <div className="contact">
      <h1>Vil du ta en kaffe?</h1>
      <h5>
        <a href="mailto:hallo@henrikfalck.no">
          hallo@henrikfalck.no
          <span class="call-me" role="img" aria-label="Vi sees">
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
        <ExternalLink to="https://behance.net/henrikfalck" aria="Behance">
          Behance
        </ExternalLink>
        <ExternalLink to="https://dribbble.com/henrikfalck" aria="Dribbble">
          Dribbble
        </ExternalLink>
        <ExternalLink to="https://github.com/henrikfalck" aria="Github">
          Github
        </ExternalLink>
        <ExternalLink to="https://instagram.com/henrikfalck_" aria="Instagram">
          Instagram
        </ExternalLink>
        <ExternalLink
          to="https://www.linkedin.com/in/henrik-falck/"
          aria="LinkedIn"
        >
          LinkedIn
        </ExternalLink>
      </div>
      <div className="made-with">
        <p>
          Designet i Sketch, utviklet i{" "}
          <ExternalLink to="https://www.gatsbyjs.org">GatsbyJS</ExternalLink>{" "}
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
