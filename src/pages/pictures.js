import React from 'react'
import styled from "styled-components"
import {graphql} from "gatsby"
import {Layout, Pictures} from "../components"


const PicturesPage = ({data}) => {
  // console.log(data);
  const {allAirtable : {nodes: pictures}} = data

  return (
    <Wrapper>
      <Layout>
     <Pictures 
     pictures={pictures}
     />
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "pictures"}}) {
      nodes {
        id
        data {
          collect
          context
          credit
          medium
          place
          slug
          title
          town
          year
          pic {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PicturesPage

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
nav {
  background: var(--clr-primary-1); 
}


`
