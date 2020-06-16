import React from "react"
import "./_codeblock.scss"

const CodeBlock = ({ children, language }) => (
  <pre>
    <code className="codeblock">
      <span className="codeblock--language">{language}</span>
      {children}
    </code>
  </pre>
)

export default CodeBlock
