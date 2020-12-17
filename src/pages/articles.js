import React, {useState, useEffect} from 'react'
// import {graphql} from "gatsby"
import styled from "styled-components"
import {Articles, Layout} from "../components"
import base from "../components/Airtable"

// console.log(base);

const ArticlesPage = ({data}) => {
const [posts, setPosts] = useState({})
const [loading, setLoading] = useState(true)

!loading && console.log(posts);

const getRecords = async () => {
const records = await base("articles").select({}).firstPage().catch(error => console.log(error))
const newPosts = records.map(record => {
  const {id, fields} = record; 
  return {id: id, data: fields}
})
setPosts(newPosts); 
setLoading(false); 
}

useEffect(()=> {
getRecords()
}, [])

  // const {queryArticles : {nodes : articles}} = data; 
  return (
     <Wrapper>
        <Layout>
          {loading ? (
<p>loading ...</p>
          ) : (

    <Articles 
    articles={posts}
    />
          )}
     
    
      </Layout>
    </Wrapper>
  )
}

// export const query = graphql`
//   {
//     queryArticles: allAirtable(filter: {table: {eq: "articles"}}) {
//       nodes {
//         id
//         data {
//           content
//           title
//           author
//           editor
//           place
//           year
//         }
//       }
//     }
//   }
// `

export default ArticlesPage

const Wrapper = styled.main`
min-height: 100vh; 
background: var(--clr-white); 
nav {
  background: var(--clr-primary-1); 
}



`