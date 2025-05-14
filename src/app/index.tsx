import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useAuth } from './providers/AuthProvider'

export default function LandingScreen() {
  const {isAuthenticated, signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>

      <Text>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</Text>
      <Button title='Sign Out' onPress={signOut}/>
      <Link href={'/sign-in'}>Go to sign in</Link>

      <Link href={'/(protected)/'}>Go to Home </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})