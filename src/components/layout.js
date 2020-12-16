import React from 'react'
import {Footer, NavBar, SideBar} from "./index"

const Layout = ({children}) => {

  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)
  const toggleSide = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <>
      <NavBar 
      isSideBarOpen={isSideBarOpen}
      toggleSide={toggleSide}
      />
<SideBar 
isSideBarOpen={isSideBarOpen}
toggleSide={toggleSide}
/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
