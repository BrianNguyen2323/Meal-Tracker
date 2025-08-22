import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Index() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    const loginResponse = await res.json();
    if (loginResponse.success) {
      await AsyncStorage.setItem('auth', 'true');
      router.replace('/home'); // replace so they can't go "back" to index easily
    } else {
      setError('Wrong password');
    }
  };

  // const handleSubmit = async () => {
  //   if (password === loginPassword) {
  //     await AsyncStorage.setItem('auth', 'true');
  //     router.replace('/home'); // replace so they can't go "back" to index easily
  //   } else {
  //     setError('Wrong password');
  //   }
  // };

  return (
    <View className='flex-1 justify-center items-center p-4'>
      <Text className='text-xl mb-4'>Enter Password</Text>
      <TextInput
        className='border border-gray-400 rounded p-2 w-[50vw] mb-4'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text className='text-red-500 mt-2'>{error}</Text> : null}
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
}
