import React from "react"
import "./interests.scss"
export const Interests = () => (
  <section className="about--lists">
    <div className="software">
      <h2>Jeg jobber i …</h2>
      <ul className="arrow-list">
        <li>Sketch</li>
        <li>Adobe</li>
        <li>VS Code</li>
      </ul>
    </div>
    <div className="write">
      <h2>Jeg skriver …</h2>
      <ul className="arrow-list">
        <li>ReactJS</li>
        <li>Sass</li>
        <li>GraphQL</li>
        <li>Javascript</li>
      </ul>
    </div>
  </section>
)
export const Bucketlist = () => (
  <section className="bucketlist">
    <h1 className="display">Bucketlist</h1>
    <ul>
      <li className="bucketlist--item done">Publisere porteføljen</li>
      <li className="bucketlist--item">Få meg hund</li>
      <li className="bucketlist--item">Starte eget byrå</li>
      <li className="bucketlist--item">Lære meg Python</li>
      <li className="bucketlist--item">Se Bring Me The Horizon live</li>
      <li className="bucketlist--item">Få egne visittkort</li>
      <li className="bucketlist--item">Flytte til Oslo</li>
    </ul>
  </section>
)
