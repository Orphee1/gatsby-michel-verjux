import React from 'react'
import styled from "styled-components"
import {Layout} from "../components"

const ArticlesPage = () => {
  return (
     <Wrapper>
        <Layout>
      <h2>Hello from Articles Page</h2>
      </Layout>
    </Wrapper>
  )
}

export default ArticlesPage

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
nav {
  background: var(--clr-primary-1); 
}



`