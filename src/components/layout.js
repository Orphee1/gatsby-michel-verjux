import React from 'react'
import {Footer, NavBar} from "./index"

const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
