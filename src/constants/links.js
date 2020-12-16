import React from 'react';
import {Link} from "gatsby"; 

const links = [
 {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "choix d'images",
    url: "/pictures/",
  },
  {
    id: 3,
    text: "choix de textes",
    url: "/articles/",
  },
  {
    id: 4,
    text: "bio",
    url: "/about/",
  },
  {
    id: 5,
    text: "biblio",
    url: "/biblio/",
  }

]

const activeStyles = {
  color: "#bb2525", 
  background: "white", 
  padding: "0.2rem 0.4rem", 
  borderRadius : "O.25rem"
}

const tempLinks = links.map(link => {
  const {id, text, url} = link
return <li key={id} >
<Link
to={url}
activeStyle={activeStyles}
>
{text}
</Link>
</li>
})

export default ({styleClass}) => {
  return <ul 
  className={` ${styleClass ? styleClass : ""} `}
  >
    {tempLinks}
  </ul>
}
