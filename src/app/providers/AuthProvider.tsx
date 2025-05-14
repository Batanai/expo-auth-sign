import { View, Text } from 'react-native'
import React, { Children, createContext, PropsWithChildren, useContext, useState } from 'react'

const AuthContext = createContext({
    isAuthenticated: false,
    signIn: () => {},
    signOut: () => {},
});

export default function AuthProvider({children}: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const signIn = () => {
    setIsAuthenticated(true)
  }

  const signOut = () => {
    setIsAuthenticated(false)
  }
  return (
    <AuthContext.Provider value={{isAuthenticated, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);