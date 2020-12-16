import React from 'react'
import styled from "styled-components"
import {Layout} from "../components"


const AboutPage = () => {
  return (
      <Wrapper>
<Layout>
      <h2>Hello from About Page</h2>
</Layout>

    </Wrapper>
  )
}

export default AboutPage

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
nav {
  background: var(--clr-primary-1); 
}



`