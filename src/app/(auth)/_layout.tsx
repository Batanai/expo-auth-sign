import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot, Stack } from 'expo-router'
import { useAuth } from '../providers/AuthProvider'

export default function AuthLayout() {
  const {isAuthenticated} = useAuth();

  if (isAuthenticated) {
    return <Redirect href={'/'} />
  }

  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{headerShown: false, title: 'Sign in' }}/>
      <Stack.Screen name='sign-up' options={{title: 'Sign up'}}/>
    </Stack>
  )
}