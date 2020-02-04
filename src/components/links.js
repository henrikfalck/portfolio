import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// <ExternalLink to=""></ExternalLink>
export const ExternalLink = ({ to, children, aria }) => (
  <a
    href={to}
    className="external-link"
    rel="noopener noreferrer"
    target="_blank"
    title={aria}
    aria-label={aria}
  >
    {children}
  </a>
)

// <InternalLink to=""></InternalLink>
export const InternalLink = ({ to, children, aria }) => (
  <Link className="internal-link" to={to} title={aria} aria-label={aria}>
    {children}
  </Link>
)

// <AnimatedLink to=""></AnimatedLink>
export const AnimatedLink = ({ to, children, aria }) => (
  <AniLink
    to={to}
    title={aria}
    aria-label={aria}
    cover
    direction="down"
    duration={1.5}
    bg="#080a09"
  >
    {children}
  </AniLink>
)
