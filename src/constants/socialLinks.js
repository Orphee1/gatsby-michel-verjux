import React from 'react';
import {FaInstagramSquare} from "react-icons/fa"

const data = [

   {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/michel_verjux_/",
  },
]

const socialLinks = data.map(link => {
const {id, url, icon} = link 
return <li  key={id}>
<a href={url} className="social-link" >
  {icon}
</a>
</li>
})

export default ({styleClass}) => {

  return <ul  className={`  ${styleClass? styleClass : ""}  `}
  >
    {socialLinks}
  </ul>
}