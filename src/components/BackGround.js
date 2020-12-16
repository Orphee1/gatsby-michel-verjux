import React from 'react'
import BackGroundImage from "gatsby-background-image"
import styled from "styled-components"

const BackGround = ({children, image}) => {
  return (
    <Wrapper>
      <BackGroundImage
      Tag="div"
      fluid={image}
      preserveStackingContext={true}
      className="bcg"
      >
{children}
      </BackGroundImage>
      
    </Wrapper>
  )
}

export default BackGround

const Wrapper = styled.section`
.bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    /* margin-top: -5rem;  */
    display: grid;
    place-items: center;
  }
`
