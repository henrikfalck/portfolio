import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

import "../style/base.scss"
import "../style/typography/fonts/fontface.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
