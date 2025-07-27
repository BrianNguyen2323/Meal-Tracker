import { getMeals } from '@/api/mealApi';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GenerateRows from './LogRows';
import MealPicker from './MealPicker';

type Meal = {
  id: string;
  type: string;
  timeFed: string;
};

const MealLogFrame = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchMeals = useCallback(async () => {
    try {
      const result = await getMeals();
      setMeals(result);
    } catch (error: any) {
      console.error('Error fetching meals:', error);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <View className='flex flex-col items-center text-center w-[95vw]'>
      <MealPicker onSubmitSuccess={fetchMeals} />
      <View className='flex flex-column items-center text-center bg-[#E6E6FA] border-2 border-blue-500 border-b-0 w-[100%] py-2 rounded-t-2xl'>
        <Text className='text-2xl pb-1 font-semibold'> Meal Log</Text>
        <View className='bg-gray-400 h-[1px] w-[90%] self-center' />
        <View className='flex flex-row justify-between pt-2 w-[90%]'>
          <Text className='text-gray-500 italic text-xl font-medium'>Meal</Text>
          <Text className='ml-36 text-gray-500 italic text-xl font-medium'>
            Date & Time
          </Text>
        </View>
      </View>
      <SafeAreaProvider>
        <SafeAreaView
          className='h-[500px] w-[95vw] border-2 border-t-0 border-blue-500 rounded-b-2xl bg-white self-center overflow-hidden'
          style={{ paddingTop: StatusBar.currentHeight }}
          edges={['top']}
        >
          <ScrollView
            className='flex-1 w-full'
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={true}
          >
            <View className='flex w-full content-start px-3'>
              <GenerateRows meals={meals} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
};

const MealLog = () => {
  return (
    <View className='w-full items-center'>
      <MealLogFrame />
    </View>
  );
};

export default MealLog;
