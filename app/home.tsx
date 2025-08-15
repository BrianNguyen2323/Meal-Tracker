import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import '../global.css';
import MealLog from './components/MealLog';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await AsyncStorage.getItem('auth');
      if (auth !== 'true') {
        router.replace('/'); // kick them back to password page
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) return null;

  return (
    <View className='bg-slate-600 h-full'>
      <View className='items-end m-1'>
        <Button
          title='Log Out'
          onPress={async () => {
            await AsyncStorage.removeItem('auth');
            router.replace('/');
          }}
        />
      </View>
      <View className='flex flex-col items-center justify-center p-4 gap-4 '>
        <Text className='text-6xl font-bold'>🐕FEED ME🐕</Text>
        <Text className='text-3xl font-semibold text-red-600'>I HUNGER</Text>
      </View>
      <MealLog />
    </View>
  );
}
