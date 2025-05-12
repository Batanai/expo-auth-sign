import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type CustomButtonProps = {
    text: string;
} & PressableProps

const CustomButton = ({text,...props}: CustomButtonProps) => {
  return (
    <Pressable {...props} style={[styles.button]}
    >
    <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#4353fd',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }
})