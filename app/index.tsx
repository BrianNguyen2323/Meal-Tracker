import React from 'react';
import { Text, View } from 'react-native';
import '../global.css';
// import MealLog from './components/TestMealLog';
import MealLog from './components/MealLog';

export default function Home() {
  return (
    <View className='bg-slate-600 h-full'>
      <View className='flex flex-col items-center justify-center p-4 gap-4 '>
        <Text className='text-6xl font-bold'>🐕FEED ME🐕</Text>
        <Text className='text-3xl font-semibold text-red-600'>I HUNGER</Text>
      </View>
      <MealLog />
    </View>
  );
}
