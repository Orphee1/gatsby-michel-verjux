import React, {useState, useContext, createContext} from 'react';

const AppContext = createContext()

const AppProvider = ({children}) => {
const [isLanding, setIsLanding] = useState(true)
const [modalArticles, setModalArticles] = useState(false)

const closeLanding = () => (
  setIsLanding(false)
)

const toggleModalArticles = () => {
  setModalArticles(!modalArticles); 
}

return (
  <AppContext.Provider
  value={{ isLanding, closeLanding, modalArticles, toggleModalArticles  }}
  >
    {children}
  </AppContext.Provider>
)
}

// custom Hook 

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}