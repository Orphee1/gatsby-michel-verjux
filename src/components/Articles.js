import React from 'react'
import styled from "styled-components"
import {useGlobalContext} from "../context/globalContext"
import ReactMarkdown from "react-markdown"


const Articles = ({articles, articlesMd}) => {
 
  const {toggleModalArticles} = useGlobalContext(); 




  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
 <h2>
          <span>/</span>
          Choix d'articles
        </h2>
        </div>
       <div className="articles-container">
         {/* {articles.map(article => {
const {id, data} = article; 
const {content, title} = data; 
return <article
// className="red"
key={id}
>
<h3>{title}</h3>
<p>{content}</p>

</article>
         })} */}
      
       </div>
       <div className="articles-container">
{articlesMd.map(item => {
  const {id, fields: {content}} = item; 
  return <article>
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  </article>

})}
       </div>
 
       <button className="btn post-btn"  
       onClick={toggleModalArticles}
       >poster un article</button>
     
       
      </div>
    </Wrapper>
  )
}

export default Articles

const Wrapper = styled.section`
background: var(--clr-primary-1);
padding : 5rem 0; 
.title {
  text-align: center;
  margin-bottom: 2rem;
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
      color: var(--clr-white);
    span {
      font-size: 0.85em;
      color: var(--clr-white);
      margin-right: 1rem;
      font-weight: 700;
    }
  }
}
 a {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
    color: var(--clr-primary-1); 
    background: var(--clr-white); 
  }
  .articles-container {
display: grid; 
color: var(--clr-white); 
 max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: auto auto;
    grid-auto-rows: auto;
    p {
color: var(--clr-white); 
    }
    article {
      height: auto; 
    
      
    }
  }
  button {
    /* display: block; */
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
    color: var(--clr-primary-1); 
    background: var(--clr-white); 
  }
  @media screen and (min-width: 992px) {

 article {
      /* height: auto;  */
      width: 60vw; 
    }
     
  }
  

` 
