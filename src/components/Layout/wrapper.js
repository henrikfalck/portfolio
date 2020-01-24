import React from "react"

const Wrapper = (maxWidth, children) => (
  <div
    className="wrapper"
    style={{
      maxWidth: { maxWidth },
    }}
  >
    {children}
  </div>
)

export default Wrapper
