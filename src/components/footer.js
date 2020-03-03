import React from "react"
import Wrapper from "../components/wrapper"
import { ExternalLink } from "../components/links"

const Footer = () => (
  <footer>
    <Wrapper width={1440}>
      <div className="contact">
        <h1 className="display">Vil du ta en prat?</h1>
        <p>
          Send meg en e-post på{" "}
          <a href="mailto:hallo@henrikfalck.no">hallo@henrikfalck.no</a>, så
          sees vi{" "}
          <span role="img" aria-label="Emoji">
            🤙
          </span>
        </p>
      </div>
    </Wrapper>
    <Wrapper width={1440}>
      <div className="bottom-row">
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
          <ExternalLink
            to="https://instagram.com/henrikfalck_"
            aria="Instagram"
          >
            Instagram
          </ExternalLink>
          <ExternalLink
            to="https://www.linkedin.com/in/henrik-falck/"
            aria="LinkedIn"
          >
            LinkedIn
          </ExternalLink>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()}. Ikke stjel, er du snill.</p>
        </div>
      </div>
    </Wrapper>
  </footer>
)

export default Footer
