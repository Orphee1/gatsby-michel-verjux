import React from 'react'
import { Articles, Hero ,HomePictures, Landing, Layout} from "../components"
import {useGlobalContext} from "../context/globalContext"
import {graphql} from "gatsby"


const Home = ({data}) => {
  const {isLanding} = useGlobalContext(); 
  // console.log(data);
  const {allAirtable: {nodes : pictures} } = data; 
 
  return (
    <Layout>
      {isLanding ? (
        <Landing />
      ) :(
<>
      <Hero />
      <HomePictures 
      pictures={pictures}
      />
      <Articles />
      </>
      ) }
    </Layout>
  )
}


export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "pictures"}}, limit: 4, sort: {fields: data___year, order: DESC}) {
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

export default Home