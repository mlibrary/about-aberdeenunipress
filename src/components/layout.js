import React from "react"
import "./scss/custom.scss"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <a className="sr-only sr-only-focusable text-dark" href="#content">Skip to main content</a>
      <Navbar />
      <main id="content" className="page-container">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
