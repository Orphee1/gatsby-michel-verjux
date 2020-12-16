import React, {useState, useContext, createContext} from 'react';

const AppContext = createContext()

const AppProvider = ({children}) => {
const [isLanding, setIsLanding] = React.useState(true)

const closeLanding = () => (
  setIsLanding(false)
)


return (
  <AppContext.Provider
  value={{ isLanding, closeLanding  }}
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