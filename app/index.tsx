import React from 'react';
import { Text, View } from 'react-native';
import '../global.css';
import MealLog from './components/MealLog';
import MealPicker from './components/MealPicker';

export default function Home() {
  return (
    <View className='bg-slate-600 h-full'>
      <View className='flex flex-col items-center justify-center p-4 gap-4 '>
      <Text className='text-4xl'> test </Text>
        <Text className='text-6xl font-bold'>🐕FEED ME🐕</Text>
        <Text className='text-3xl font-semibold text-red-600'>I HUNGER</Text>
      </View>
      <View className='flex flex-row align-middle justify-center w-full gap-8'>
        <MealPicker />
      </View>
      <MealLog />
      {/* <View className='flex flex-col items-left ml-40 w-2/3'>
        <Text className='m-10'> Meal Log </Text>
        <View className='border-white rounded-md'>
        <table>
          <tr>
            <th>Meal Type</th>
            <th>Time</th>
          </tr>
        </table>
      </View> */}
    </View>
  );
}
