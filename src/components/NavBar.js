import React from 'react'
import styled from "styled-components"
import Links from "../constants/links" 
import { GoThreeBars } from "react-icons/go"

const NavBar = ({ isSideBarOpen ,toggleSide}) => {
  return (
    <Wrapper>
   <div className="nav-center">
     {! isSideBarOpen && (
       <button className="toggle-btn"
       onClick={toggleSide}
       >
<GoThreeBars />
     </button>
       )}
      <Links styleClass="nav-links" />
     </div>   
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.nav`
position: relative; 
z-index: 1;
background: transparent; 
height: 5rem; 
 display: flex;
  align-items: center;
.nav-center{
      width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    justify-content: flex-end; 
}
.toggle-btn {
 width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border-radius: 1.5rem;
      border: transparent;
       color: var(--clr-white);
      background: var(--clr-primary-1);
      outline: none; 
        cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-red-dark);
      }
}
.nav-links {
  display: none; 
}
  @media screen and (min-width: 800px) { 
    .toggle-btn {
      display: none;
    }
.nav-links {
   display: flex;
      justify-content: flex-end;
}
.nav-links li {
  margin-left: 2rem; 
}
.nav-links a {
    text-transform: capitalize;
      color: var(--clr-white);
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
}

  }

`
