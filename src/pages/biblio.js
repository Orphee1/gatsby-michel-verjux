import React from 'react'
import styled from "styled-components"
import {Layout} from "../components"

const BiblioPage = () => {
  return (
   <Wrapper>
     <Layout >  

      <h2>Hello from Biblio Page</h2>

     </Layout>
    </Wrapper>
  )
}

export default BiblioPage
const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
nav {
  background: var(--clr-primary-1); 
}


`