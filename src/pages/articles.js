import React, {useState, useEffect} from 'react'
// import {graphql} from "gatsby"
import styled from "styled-components"
import {Articles, Layout, ModalArticles} from "../components"
import base from "../components/Airtable"

// console.log(base);

const ArticlesPage = ({data}) => {


const [posts, setPosts] = useState({})
const [postsMd, setPostsMd] = useState({})
const [loading, setLoading] = useState(true)

// !loading && console.log(posts);
// !loading && console.log(postsMd);

const getRecords = async () => {
const records = await base("articles").select({}).firstPage().catch(error => console.log(error))
const newPosts = records.map(record => {
  const {id, fields} = record; 
  return {id: id, data: fields}
})
setPosts(newPosts); 
const recordsMd = await base("markdown").select({}).firstPage().catch(error => console.log(error))
  const newPostsMd = recordsMd.map(recordMd => {
    const {id, fields} = recordMd
    return {id, fields }
  })
setPostsMd(newPostsMd)
setLoading(false); 
}

// const getMdRecords = async () => {
//   const records = await base("markdown").select({}).firstPage().catch(error => console.log(error))
//   console.log(records)
// }

useEffect(()=> {

getRecords()
// getMdRecords()

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
    articlesMd={postsMd}
    
    />
          )}
    <ModalArticles 
    />
  
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