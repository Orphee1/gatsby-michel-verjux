import React from 'react'
import styled from "styled-components"
import {Link} from "gatsby"; 

const HomeArticles = ({articles}) => {
  // console.log(articles);
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
         {articles.map(article => {
const {id, data} = article; 
const {content, title} = data; 
return <article
// className="red"
key={id}
>
<h3>{title}</h3>
<p>{content.substring(0, 450)}...</p>

</article>
         })}
      
       </div>
      
        <Link 
        to="/articles/"
        className="btn" >Plus de textes</Link>
       
      </div>
    </Wrapper>
  )
}

export default HomeArticles

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
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
    p {
color: var(--clr-grey-7); 
    }
    article {
      height: auto; 
    }
  }
  @media screen and (min-width: 992px) {

     .articles-container { 
grid-template-columns: 1fr 1fr; 

     }
  }
  

` 
