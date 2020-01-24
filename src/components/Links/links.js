import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// <ExternalLink to=""></ExternalLink>
export const ExternalLink = (to, { children }) => (
  <a
    href={to}
    className="external-link"
    rel="noreferrer external nofollow"
    target="_blank"
  >
    {children}
  </a>
)

// <InternalLink to=""></InternalLink>
export const InternalLink = (to, { children }) => (
  <Link to={to}>{children}</Link>
)

// <AnimatedLink to=""></AnimatedLink>
export const AnimatedLink = (to, { children }) => (
  <AniLink to={to} cover direction="left" duration={2} bg="#ffffff">
    {children}
  </AniLink>
)
