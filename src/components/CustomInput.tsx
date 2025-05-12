import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import {useForm, Controller, Control, FieldValues, Path} from 'react-hook-form';

type CustomInputProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
} & TextInputProps

function CustomInput<T extends FieldValues>({control, name, ...props}: CustomInputProps<T>) {
  return (
    <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}, fieldState: {error} }) => (
            <View style={styles.container}>
                <TextInput
                {...props}
                placeholder={props.placeholder}
                value={value}
                onChangeText={onChange}
                autoFocus 
                autoCapitalize='none'
                keyboardType='email-address'
                autoComplete='email'
                style={[styles.input, props.style]}
                />
                <Text style={styles.error}>{error?.message}</Text>
            </View>
        )}
    />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        gap: 4
    },
    input:{
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#ccc'
    },
    error: {
        color: 'crimson',

    }
})