import React from 'react'
import { Hero, HomeArticles, HomePictures, Landing, Layout} from "../components"
import {useGlobalContext} from "../context/globalContext"
import {graphql} from "gatsby"


const Home = ({data}) => {
  const {isLanding} = useGlobalContext(); 
  // console.log(data);
const {queryPics: {nodes : pictures} } = data; 
console.log(pictures);
 const {queryArticles : {nodes : articles}} = data; 
 
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
      <HomeArticles 
      articles={articles}
      page
      />
      </>
      ) }
    </Layout>
  )
}


export const query = graphql`
  {
    queryPics: allAirtable(filter: {table: {eq: "pictures"}}, limit: 4, sort: {fields: data___year, order: DESC}) {
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
   queryArticles: allAirtable(filter: {table: {eq: "articles"}}) {
    nodes {
      id
      data {
        content
        title
        author
        editor
        place
       
      }
    }
  }
  }
`

export default Home