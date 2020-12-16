import React from 'react'
import styled from "styled-components"
import SocialLinks from "../constants/socialLinks"


const Footer = () => {
  return (
    <Wrapper>
    
       <div className="section-center s-b">
         <h3>Michel Verjux</h3>
         <SocialLinks />
       </div>
       <div className="section-center d-flex">
         <h4> &copy; {new Date().getFullYear()} <span>HL</span> built with Gatsby.</h4>
       </div>
      
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
height: 8rem; 
display: grid; 
place-items: center; 
background: black; 
color: var(--clr-white); 
div {
  margin: 1rem auto;
}
span {
  color: var(--clr-red-dark); 
}
`
