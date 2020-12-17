import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"; 

const Articles = () => {
  return (
    <Wrapper>

      <div className="section-center">
        {/* <Link className="btn" >Plus d'articles</Link> */}
      </div>
    </Wrapper>
  )
}

export default Articles

const Wrapper = styled.section`
height: 100vh; 
background: var(--clr-primary-1)

` 
