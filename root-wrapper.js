import React from 'react';
import {createGlobalStyle } from "styled-components"
import {AppProvider} from "./src/context/globalContext"


const GlobalStyle = createGlobalStyle`

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: black;
  --clr-primary-2: hsl(21, 84%, 25%);
  --clr-primary-3: hsl(21, 81%, 29%);
  --clr-primary-4: hsl(21, 77%, 34%);
  /* primary/main color */
  --clr-primary-5: hsl(21, 62%, 45%);

  /* lighter shades of primary color */
  --clr-primary-6: hsl(21, 57%, 50%);
  --clr-primary-7: hsl(21, 65%, 59%);
  --clr-primary-8: hsl(21, 80%, 74%);
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  /* 	#bb2525 */ 
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: 'Montserrat', sans-serif;
  --ff-secondary: "Roboto", sans-serif;
  --ff-ternary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --l-transition: all 0.6s linear; 
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
  font-weight: 400;
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.s-b {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.fl-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.fl-col-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.full-width {
  width: 100%;
}


.btn {
  text-transform: uppercase;
  background: var(--clr-primary-1);
  color: var(--clr-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--clr-primary-7);
  color: var(--clr-white);
}

.page-btn {
  margin-top: 2rem;
}

.post-btn {
display: none; 
}
@media (min-width: 1200px) { 
.post-btn {
display: block; 
}

}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}

/* social links */

.social-links {
  margin-top: 2rem;
  width: 5rem;
  display: flex;
  justify-content: space-between;
}
.social-link {
  font-size: 1.75rem;
  color: var(--clr-white);
  transition: var(--transition);
}
.social-link:hover {
  color: var(--clr-red-dark);
  
}
/* gatsby links */
.active-link {
color: var(--clr-red-dark); 
}

/*
=============== 
Sidebar
===============
*/

.sidebar {
background: var(--clr-primary-1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
}

.show-sidebar {
  opacity: 1;
  transform: translateX(0);
}

.sidebar-links li {
  opacity: 0;
}

.sidebar-links li a {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--clr-white);
  letter-spacing: var(--spacing);
  margin-bottom: 0.5rem;
  font-size: 2rem;
  transition: var(--transition);
  border-radius: var(--radius);
}

.sidebar-links li a:hover {
  background: var(--clr-white);
  color: #222;
}

.close-btn {
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
  outline: none; 
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--clr-red-light);
}

@media screen and (min-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
  }
}


/*
=============== 
Sidebar Animation
===============
*/
.sidebar-links li {
  animation: slideRight 0.5s ease-in-out 0.3s forwards;
}
.sidebar-links li:nth-of-type(1) {
  animation-delay: 0.25s;
}
.sidebar-links li:nth-of-type(2) {
  animation-delay: 0.5s;
}
.sidebar-links li:nth-of-type(3) {
  animation-delay: 0.75s;
}
.sidebar-links li:nth-of-type(4) {
  animation-delay: 1s;
}
.sidebar-links li:nth-of-type(5) {
  animation-delay: 1.25s;
}
.sidebar-links li:nth-of-type(6) {
  animation-delay: 1.5s;
}
@keyframes slideRight {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.sidebar-icons li {
  opacity: 0;
  animation: slideUp 0.5s ease-in-out 0.3s forwards;
}
.sidebar-icons li:nth-of-type(1) {
  animation-delay: 1.5s;
}
.sidebar-icons li:nth-of-type(2) {
  animation-delay: 1s;
}

@keyframes slideUp {
  0% {
    transform: translateY(200px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
/*
=============== 
Modals 
===============
*/

.modal-articles-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  transition: var(--transition);
  visibility: hidden;
  z-index: -1;
}
/* OPEN/CLOSE MODAL */
.show-modal-articles {
  visibility: visible;
  z-index: 10;
}
.modal-container {
  background: var(--clr-white);
  border-radius: var(--radius);
  width: 90vw;
  height: 80vh;
  max-width: var(--max-width);
  text-align: center;
  display: grid;
  place-items: center;
  position: relative;
}
.modal-container > div {
  width: 40%; 
}
.close-modal-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-dark);
  cursor: pointer;
  outline: none; 
}

/* -- Form -- */ 

form {
   padding: 1rem;
  width: 90%;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
}
.form-group {
 width: 100%; 
  display: flex; 
  justify-content: space-between; 
  div {
    margin: 0 1rem; 
    flex: 1; 
  }
div:nth-child(2) {
   flex: 2; 
   display: flex; 
   flex-direction: column; 
}
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--clr-primary-1);
  margin-bottom: 1.25rem;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
.form-control::placeholder {
  font-family: var(--ff-primary);
  color: var(--clr-primary-2);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}

.submit-btn {
  display: block;
  width: 20%;
  padding: 1rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
/* -- Markdown -- */ 

.markdown {
  height: 42vh; 
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    row-gap: 4rem;
}
.input {
  border-color: transparent;
  border-radius: var(--radius);
  font-size: 1.2rem;
  line-height: 2;
  box-shadow: var(--dark-shadow);
  min-height: 30vh;
}
.input,
.result {
  padding: 1rem 2rem;
}
.result{
  height: auto;
  overflow-y: scroll; 
  background: var(--clr-grey-9)
}
/* -- Md styling -- */ 
blockquote {
  font-size: 2rem;
  font-style: italic;
  border-left: 5px solid var(--clr-grey-5);
  color: var(--clr-grey-5);
  padding-left: 2rem;
  line-height: 2;
  margin-bottom: 1.5rem;
}
blockquote ::first-letter {
  text-transform: uppercase;
}
/*
=============== 
Debug 
===============
*/
.red {
      background-color: red;
}

.green {
      background-color: green;
}

.blue {
      background-color: blue;
}

.yellow {
      background-color: yellow;
}

.orange {
      background-color: #f56b2b;
      color: #f56b2b;
}




`

export const wrapRootElement = ({element}) => {
return <>
<GlobalStyle />
<AppProvider>
{element} 
</AppProvider>
</>
}