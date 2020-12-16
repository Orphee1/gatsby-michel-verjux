import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery} from "gatsby"
import {BackGround} from "./index"

const query = graphql`
  {
    file(relativePath: {eq: "hero.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {file} = useStaticQuery(query); 
  // console.log(file);
  const {childImageSharp: {fluid}} = file
  return (
    <Wrapper>
      <BackGround 
      image={fluid}
      >
<div className="section-center hero-center">
  <h1>Michel Verjux</h1>
</div>
      </BackGround>
    
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
height: 100vh; 
margin-top: -5rem;
color: var(--clr-white); 
.hero-center {
  display: grid;
  height: 80%;
  h1 {
    place-self: end start; 
  }
}
@media screen and (min-width: 800px) { 
.hero-center { 
   height: 90%;
}

}

`
