import React from "react"

const Wrapper = ({ width, center, children }) => (
  <div
    className="Wrapper"
    style={{
      maxWidth: width,
      margin: center ? "0 auto" : "auto",
    }}
  >
    {children}
  </div>
)

export default Wrapper
