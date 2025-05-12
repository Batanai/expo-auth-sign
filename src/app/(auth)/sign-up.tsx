import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { Link } from 'expo-router';

const signUpSchema = z.object({
  email: z.string({message: "Email is required"}).email("Invalid email"),
  password: z.string({message: "Password is required"}).min(8, "Password should be at least 8 characters long")
});

type SignUpFields = z.infer<typeof signUpSchema>;

export default function SIgnUpScreen() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const {control, handleSubmit, formState:{errors}} = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema)
  });
  
  console.log(errors)
    const onSignUp = (data: SignUpFields) => {
      console.log('Sign In: ', data.email, data.password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Text style={styles.title}>Create an account</Text>

      <View style={styles.form}>
        <CustomInput
          control={control}
          name='email'
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          autoFocus 
          autoCapitalize='none'
          keyboardType='email-address'
          autoComplete='email'
        />

        <CustomInput
          control={control}
          name='password'
          placeholder='Password'
          secureTextEntry 
        />
      </View>
      


      <CustomButton 
        text='Sign up' 
        onPress={handleSubmit(onSignUp)}
      />

      <Link style={styles.link} href={'/sign-in'}>Already have an account? Sign in</Link>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 50
  },
  form: {
    gap: 5
  },
  title:{
    fontSize: 24,
    fontWeight: '600'
  },
  link: {
    color: '#4353fd',
    fontWeight: '600'
  }
});
