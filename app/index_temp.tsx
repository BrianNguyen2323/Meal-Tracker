import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { getMeals } from '../api/mealApi';

export default function Index() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const data = await getMeals();
        setMeals(data);
      } catch (error: any) {
        Alert.alert('Error ', error.message || 'Failed to load meals');
      }
    };

    fetchMeals();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <text className='text-3xl text-green-600'>tailwind test</text> */}
      <Text>Meals:</Text>
      {meals.map((meal: any) => (
        <Text key={meal.id}>{[meal.type, meal.timeFed]}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
