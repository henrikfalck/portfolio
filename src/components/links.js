import React from "react"
import { Link } from "gatsby"

// <ExternalLink to=""></ExternalLink>
export const ExternalLink = ({ to, children, aria }) => (
  <a
    href={to}
    className="external-link"
    rel="noopener noreferrer"
    target="_blank"
    title={children}
    aria-label={aria}
  >
    {children}
  </a>
)

// <InternalLink to=""></InternalLink>
export const InternalLink = ({ to, children, aria }) => (
  <Link
    activeClassName="active"
    className="internal-link"
    to={to}
    title={aria}
    aria-label={aria}
  >
    {children}
  </Link>
)
