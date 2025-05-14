import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot, Stack } from 'expo-router'
import { useAuth } from '../providers/AuthProvider'

export default function AppLayout() {
  const {isAuthenticated} = useAuth();

  if (!isAuthenticated) {
    return <Redirect href={'/sign-in'} />
  }
  return (
    <Stack />
  )
}