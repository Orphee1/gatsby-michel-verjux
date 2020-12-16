import React from 'react'
import styled from "styled-components"
import Links from "../constants/links" 

const NavBar = () => {
  return (
    <Wrapper>
   <div className="nav-center">
     
     
      <Links styleClass="nav-links" />
     </div>   
    </Wrapper>
  )
}

export default NavBar

const Wrapper = styled.nav`
position: relative; 
background: transparent; 

height: 5rem; 
 display: flex;
  align-items: center;
.nav-center{
      width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex-end; 
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
      /* color: var(--clr-white); */
      color: red;
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
}
  @media screen and (min-width: 768px) { 

  }

`
