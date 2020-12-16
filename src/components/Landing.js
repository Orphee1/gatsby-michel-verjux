import React from 'react'
import styled from "styled-components"
import {graphql, useStaticQuery} from "gatsby"
import {BackGround} from "./index"
import {useGlobalContext} from "../context/globalContext"

const query = graphql`
  {
    file(relativePath: {eq: "landing.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Landing = () => {
  const {closeLanding} = useGlobalContext()
  const {file} = useStaticQuery(query)
  // console.log(file);
  const {childImageSharp : {fluid}} = file
  return (
    <Wrapper>
      <BackGround
      image={fluid}
      >
<button
onClick={closeLanding}
>
<div className="section-center landing-center">
  <h1>Michel Verjux</h1>
  <p>Isabelle Lartault et Michel Verjux, <i>Tout le reste est dans l'ombre</i>, Nuit Blanche, Paris, 2010. &copy; André Morin.</p>
</div>
</button>
      </BackGround>
    </Wrapper>
  )
}

export default Landing

const Wrapper = styled.main`
position: absolute;
top: 0; 
height: 100vh; 
width: 100%; 
z-index: 1999;
button {
  width: 100%; 
  height: 100%; 
  cursor: pointer; 
  outline: none; 
  background: transparent; 
}
.landing-center {
height: 85%; 
display: grid; 
grid-template-rows: 50% 50%; 
grid-template-columns: 50% 50%; 
p {
  grid-row: 2/3; 
  color: var(--clr-white); 
  place-self: end end;
  width: 100px;  
  font-size: 0.8rem; 
  text-align: right; 

}
h1 {
  grid-row: 2/3; 
  color: var(--clr-white); 
  align-self: start ; 
  justify-self: start; 
  
}
}
  @media screen and (min-width: 800px) {
.landing-center {
   height: 90%;
h1 {
  grid-column: 1/3; 
  align-self: end; 
}
p {
  grid-column: 2/3; 
  width: 400px; 
}
}
  
}
`
