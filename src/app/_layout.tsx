import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import AuthProvider from './providers/AuthProvider'

export default function RootLayout() {
  return (
    <AuthProvider>
        <Slot />
    </AuthProvider>
  )
}