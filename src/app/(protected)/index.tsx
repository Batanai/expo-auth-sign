import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function HomeSccreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen For Logged In User</Text>
      <Link href={'/sign-in'}>Go to sign in</Link>
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