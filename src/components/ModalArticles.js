import React, {useState} from 'react'
import {useGlobalContext} from "../context/globalContext"
import { FaTimes } from 'react-icons/fa';
import base from "../components/Airtable"

const ModalArticles = () => {
  const { modalArticles, toggleModalArticles} = useGlobalContext(); 
  const [loading, setLoading] = useState(false)
const [post, setPost] = useState({
  title: "", 
  author: "", 
  editor: "", 
  traduct: "", 
  slug: "", 
  place: "", 
  content: "", 
  year: 0
})

// console.log(typeof post.year);

const handleSubmit= async (event) => {
  event.preventDefault()
  console.log("handle fired");
setLoading(true); 
const records = await base("articles").create([
  {"fields": {
    title: post.title, 
    author: post.author, 
    editor: post.editor, 
    traduct: post.traduct, 
    slug: post.slug, 
    place: post.place, 
    content: post.content, 
    year: post.year
  }}
]).catch(error => console.log(error))  
console.log(records); 
setLoading(false)
toggleModalArticles()
}



  return (
    <div className={`${modalArticles ? `modal-articles-overlay show-modal-articles` : ` modal-articles-overlay`}`}>
      <div className="modal-container">
        <h3>Poster un article</h3>
        <button className="close-modal-btn"
        onClick={toggleModalArticles}
        >
          <FaTimes />
        </button>
       <form action=""
       onSubmit={handleSubmit}
       >
        <div className="form-group">
         <div>
          <input type="text" id="title" className="form-control"
          placeholder="Titre"
          value={post.title}
          onChange={(event) => {
            setPost({...post, title: event.target.value})
          }}
          />
          <input type="text" id="author" className="form-control"
           placeholder="Auteur"
           value={post.author}
              onChange={(event) => {
            setPost({...post, author: event.target.value})
          }}
          /><input type="text" id="editor" className="form-control"
           placeholder="Éditeur"
           value={post.editor}
               onChange={(event) => {
            setPost({...post, editor: event.target.value})
          }}
          />
          <input type="text" id="traduct" className="form-control"
           placeholder="Traduction"
           value={post.traduct}
               onChange={(event) => {
            setPost({...post, traduct: event.target.value})
          }}
          />
          <input type="number" id="year" className="form-control"
           placeholder="Année"
           value={post.year}
               onChange={(event) => {
            setPost({...post, year: event.target.value})
          }}
          /><input type="text" id="place" className="form-control"
           placeholder="Ville"
           value={post.place}
               onChange={(event) => {
            setPost({...post, place: event.target.value})
          }}
          />
          </div>
          <div>
           <textarea
                name="content"
                id="content"
                rows="20"
                placeholder="Article"
                className="form-control"
                value={post.content}
                    onChange={(event) => {
            setPost({...post, content: event.target.value})
          }}
              />  
         
              </div>
        </div>
             <button type="submit" className="btn submit-btn">
              envoyer
            </button>
        </form>
      </div>
      
    </div>
  )
}

export default ModalArticles
