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

const tempLinks = links.map(link => {
  const {id, text, url} = link
return <li key={id} >
<Link
to={url}
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
