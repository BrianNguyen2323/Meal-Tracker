import { getMeals } from '@/api/mealApi';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';

// Defining the shape of the meal data
type Meal = {
  id: string;
  type: string;
};

export default function GenerateRows() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        console.log('Fetching Meal Log...');
        const result = await getMeals();
        console.log(result);
        setMeals(result); //result has to an array as that what was set for Meals' type
      } catch (error: any) {
        Alert.alert('Error', error.message || 'Failed to fetch meals.');
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <View className='w-full'>
      {meals.map((entry, index) => (
        <View
          key={entry.id}
          className={`w-full ${
            index % 2 === 0 ? 'bg-gray-100' : 'bg-transparent'
          }`}
        >
          <Text className='text-2xl text-black p-3'>{entry.type}</Text>
        </View>
      ))}
    </View>
  );
}
