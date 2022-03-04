import React, { useContext } from 'react'

type FoxyContextProps = {}

const FoxyContext = React.createContext<FoxyContextProps | null>(null)

export const useFoxy = () => {
  const context = useContext(FoxyContext)
  if (!context) throw new Error("useYearn can't be used outside of the YearnProvider")
  return context
}

export const FoxyProvider: React.FC = ({ children }) => {
  return <FoxyContext.Provider value={{}}>{children}</FoxyContext.Provider>
}
