import React from "react"
import Wrapper from "../components/wrapper"

const Footer = () => (
  <footer>
    <Wrapper width={1440}>
      <div className="contact">
        <h1 className="display">Vil du ta en prat?</h1>
        <h6>
          Send meg en e-post på{" "}
          <a href="mailto:heisann@henrikfalck.no">heisann@henrikfalck.no</a>
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
            title="Profilen min på Behance"
          >
            Behance
          </a>
          <a
            href="https://behance.com/henrikfalck"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Profilen min på Dribble"
          >
            Dribbble
          </a>
          <a
            href="https://github.com/henrikfalck"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Profilen min på Github"
          >
            Github
          </a>
          <a
            href="https://instagram.com/henrikfalck_"
            className="external-link"
            rel="noopener noreferrer"
            target="_blank"
            title="Profilen min på Instagram"
          >
            Instagram
          </a>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </Wrapper>
  </footer>
)

export default Footer
