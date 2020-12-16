import React from 'react'
import styled from "styled-components"


const Footer = () => {
  return (
    <Wrapper>
    
        <h3>This is the Footer</h3>
      
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

`
