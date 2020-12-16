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
`
