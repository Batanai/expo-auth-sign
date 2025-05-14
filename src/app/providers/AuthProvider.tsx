import { View, Text, ActivityIndicator } from 'react-native'
import React, { Children, createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'

const AuthContext = createContext({
    isAuthenticated: false,
    signIn: () => {},
    signOut: () => {},
});

export default function AuthProvider({children}: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
  
  useEffect(() => {
    const checkAuth = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));    
        setIsAuthenticated(true);
    } 
    checkAuth();
  }, []);
  const signIn = () => {
    setIsAuthenticated(true)
  }

  const signOut = () => {
    setIsAuthenticated(false)
  }

  if (isAuthenticated === undefined) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={'#5343fd'} />
    </View>
  }
  
  return (
    <AuthContext.Provider value={{isAuthenticated, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);