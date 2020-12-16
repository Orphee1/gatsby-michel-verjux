import React from 'react'
import { Hero , HomePictures, Landing, Layout} from "../components"
import {useGlobalContext} from "../context/globalContext"
const Home = () => {
  const {isLanding} = useGlobalContext(); 
  
  return (
    <Layout>
      {isLanding ? (
        <Landing />
      ) :(
<>
      <Hero />
      <HomePictures />
      </>
      ) }
    </Layout>
  )
}

export default Home
