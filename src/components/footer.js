import React from "react"
import Wrapper from "../components/wrapper"
import { IconExternalLink } from "../components/icons"

const Footer = () => (
  <footer>
    <Wrapper width={1440}>
      <div className="contact">
        <h1 className="display">Vil du ta en prat?</h1>
        <h6>
          Send meg en e-post på{" "}
          <a href="mailto:hallo@henrikfalck.no">hallo@henrikfalck.no</a>
        </h6>
      </div>
    </Wrapper>
    <Wrapper width={1440}>
      <div className="bottom-row">
        <div className="social-links">
          <a
            href="https://behance.com/henrikfalck"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Behance"
          >
            Behance <IconExternalLink />
          </a>
          <a
            href="https://behance.com/henrikfalck"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Dribble"
          >
            Dribbble <IconExternalLink />
          </a>
          <a
            href="https://github.com/henrikfalck"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Github"
          >
            Github <IconExternalLink />
          </a>
          <a
            href="https://instagram.com/henrikfalck_"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
          >
            Instagram <IconExternalLink />
          </a>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()}. Ikke stjel, er du snill.</p>
        </div>
      </div>
    </Wrapper>
  </footer>
)

export default Footer
