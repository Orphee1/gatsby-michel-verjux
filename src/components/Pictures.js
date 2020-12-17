import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import Image from "gatsby-image"; 
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"



const Pictures = ({pictures}) => {
  const [images] = useState(pictures)
  const [index, setIndex] = useState(0); 
 
useEffect(() => {
  const lastIndex = images.length - 1
if (index < 0) {
setIndex(lastIndex)
}
if (index > lastIndex) {
setIndex(0); 
}
}, [index, images])

useEffect(() => {
  let slider = setInterval(()=> {
setIndex(index + 1)
  }, 5000)
  return () => {
    clearInterval(slider)
  }
}, [index])

  return (
    <Wrapper>
      <div className=" pictures-center">
        {images.map((image, imageIndex ) => {
console.log(image);
const {id, data} = image
const fluid = data.pic.localFiles[0].childImageSharp.fluid; 

let position = "nextSlide"
if (imageIndex === index) {
position = "activeSlide"
}
if (imageIndex === index - 1 
  || (index === 0 && imageIndex === images.length -1)
  ) {
  position = "lastSlide"
}
return <article  className={position} key={imageIndex} >
<Image 
fluid={fluid}
className="img"
/>
</article>

        })}
<button className="prev"
onClick={() => setIndex(index - 1)
}
>
  <FiChevronLeft />
</button>
<button className="next"
onClick={() => setIndex(index + 1)
}
>
  <FiChevronRight />
</button>
      </div>
    </Wrapper>
  )
}

export default Pictures

const Wrapper = styled.section`
min-height: 100vh; 
 display: grid; 
 place-items: center; 
.pictures-center {
  /* margin: 0 auto; */
  width: 90vw;
  height: 90vh;
  max-width: 800px;
  position: relative;
  display: flex;
  overflow: hidden;
}
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
  margin: 0 auto; 
  display: flex; 
  justify-content: center; 
  /* background: blue;  */
}

.img {
width: 450px;
  height: 90%;
  object-fit: contain;
  
}

.prev,
.next {
  position: absolute;
  top: 95%;
  transform: translateY(-50%);
  background: var(--clr-primary-1);
  color: var(--clr-white);
  width: 2rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1.75rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}

.prev:hover,
.next:hover {
  background: var(--clr-primary-5);
}
.prev {
  left: 30%;

}
.next {
  right: 30%;
}


article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}

@media screen and (min-width: 800px ) {

.pictures-center {

}

.img {
width: 650px;
  height: 90%;
  object-fit: contain;
  
}
 .prev,
  .next {
    width: 2.5rem;
    height: 3.5rem;
    font-size: 2rem;
  }
  .prev {
  left: 30%;

}
.next {
  right: 30%;
}

}
@media screen and (min-width: 800px ) { 

  .pictures-center {
 max-width: 1200px;
}

.img {
width: 80%;
  height: 90vh;
  object-fit: contain;
  
}

 .prev {
   top: 47%; 
  left: 0;

}
.next {
  top: 47%; 
  right: 0;
}
}
     
`