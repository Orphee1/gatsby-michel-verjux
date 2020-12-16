import React from 'react'
import styled from "styled-components"
import {Layout} from "../components"

const PicturesPage = () => {
  return (
    <Wrapper>
      <Layout>
      <h2>Hello from Pictures Page</h2>
      </Layout>
    </Wrapper>
  )
}

export default PicturesPage

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
nav {
  background: var(--clr-primary-1); 
}


`
