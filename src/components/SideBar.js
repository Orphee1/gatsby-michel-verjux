import React from 'react'
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimesCircle } from "react-icons/fa"


const SideBar = ({isSideBarOpen, toggleSide}) => {
  return (
    <aside className={` ${isSideBarOpen ? ` sidebar show-sidebar ` : ` sidebar ` } `}       >
      {isSideBarOpen && (
      <button className="close-btn"
      onClick={toggleSide}
      >
        <FaTimesCircle />
      </button>
      )}
      <div className="fl-col">
        <Links  styleClass={ ` ${isSideBarOpen && ` sidebar-links `} `     } />
       <SocialLinks  styleClass={`  ${isSideBarOpen && ` sidebar-icons` }  `}    />
      </div>
    </aside>
  )
}

export default SideBar


