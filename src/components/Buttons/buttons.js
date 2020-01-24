import React from "react"

// Import { PrimaryButton, SecondaryButton } from "./components/Buttons/buttons.js"
export const PrimaryButton = ({ children }) => (
  <button className="primary">{children}</button>
)

export const SecondaryButton = ({ children }) => (
  <button className="secondary">{children}</button>
)

export const DangerButton = ({ children }) => (
  <button className="danger">{children}</button>
)
