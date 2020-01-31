import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// <ExternalLink to=""></ExternalLink>
export const ExternalLink = (to, { children }, aria) => (
  <a
    href={to}
    className="external-link"
    rel="noopener noreferrer"
    target="_blank"
    title={aria}
  >
    {children}
  </a>
)

// <InternalLink to=""></InternalLink>
export const InternalLink = (to, { children }, aria) => (
  <Link className="internal-link" to={to} title={aria}>
    {children}
  </Link>
)

// <AnimatedLink to=""></AnimatedLink>
export const AnimatedLink = (to, { children }) => (
  <AniLink to={to} cover direction="left" duration={1} bg="#ffe9cf">
    {children}
  </AniLink>
)
