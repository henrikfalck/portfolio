import React from "react"

// Import { PrimaryButton, SecondaryButton } from "./components/Buttons/buttons.js"
export const PrimaryButton = (to, { children }, aria) => (
  <button className="button-primary" aria-label={aria} title={aria} type="link">
    <a href={to}>{children}</a>
  </button>
)

export const SecondaryButton = (to, { children }, aria) => (
  <button
    className="button-secondary"
    aria-label={aria}
    title={aria}
    type="link"
  >
    <a href={to}>{children}</a>
  </button>
)

export const DangerButton = (to, { children }, aria) => (
  <button className="button-danger" aria-label={aria} title={aria} type="link">
    <a href={to}>{children}</a>
  </button>
)

export const LinkButton = (to, { children }, aria) => (
  <a
    href={to}
    aria-label={aria}
    title={aria}
    className="button-link"
    type="button"
  >
    {children}
  </a>
)
