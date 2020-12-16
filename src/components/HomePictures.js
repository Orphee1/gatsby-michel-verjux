import React from 'react'
import {Link} from "gatsby"
import Image from "gatsby-image"; 
import styled from "styled-components"

const HomePictures = ({pictures}) => {
  // console.log(pictures);
  
  return (
    <Wrapper>
     <div className="tile-layout">
{pictures.map((picture, index)=> {
console.log(picture);
const {id } = picture; 
const {pic, title, year, town} = picture.data; 
const fluid = pic.localFiles[0].childImageSharp.fluid
return <article
key={index} className={`div-${index}`}
>
<Image   
className="img"
fluid={fluid}
/>
<div className="info">
  <p>{title}, {town}, {year}.</p>
</div>
</article>
})}

     </div>
     <Link to="/pictures" className="btn " >
       Choix d'Images
     </Link>
    </Wrapper>
  )
}

export default HomePictures

const Wrapper  = styled.section`
/* height: 100vh;  */
background: var(--clr-white); 
padding : 5rem 0; 

.tile-layout {
      margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
}
  /* GOTCHA!!!!! */
  .img {
    height: 100%;
     transition: var(--transition);
  }
    article {
    position: relative;
    overflow: hidden;
    /* border-radius: var(--radius); */
    background: var(--clr-primary-1);
    &:hover .img {
      opacity: 0.2;
    }
    .info {
      position: absolute;
      /* bottom: 9; */
      left: 35%;
      transform: translate(-50%, -50%);
      width: 100%;
      opacity: 0;
      transition: var(--l-transition);
      color: var(--clr-white);
      text-align: center;
      p {
        margin-bottom: 1.5rem;
        color: var(--clr-white);
        font-size: 0.8rem; 
       
      }
    }
     &:hover .info {
      opacity: 1;
    }
    }
      @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
      }
      @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
  }
 @media (min-width: 1200px) {
    .tile-layout {
      display: grid;
      grid-template-areas:
        "a b b"
        "a c d";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
    }
  }
  a {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
 

`
