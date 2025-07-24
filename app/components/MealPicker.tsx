// components/MealPicker.tsx
import { postMeal } from '@/api/mealApi';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';

export default function MealPicker() {
  const [mealType, setMealType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = async () => {
    console.log('button clicked');
    if (!mealType) {
      Alert.alert('Error', 'Please select a meal type');
      console.log('Error', 'Please select a meal type');
      return;
    }

    try {
      await postMeal(mealType);
      Alert.alert('Success', 'Meal submitted!');
      console.log('Successfully submitted meal!');
      setMealType('');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View className='flex flex-row items-center p-4 gap-4'>
      <Text className='text-lg text-white'>
        Selected Meal: {mealType || 'None'}
      </Text>

      <Pressable
        onPress={() => setModalVisible(true)}
        className='bg-violet-500 px-4 py-2 rounded'
      >
        <Text className='text-white'>Choose Meal Type</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}
      >
        <View className='flex-1 justify-center items-center bg-black/50'>
          <View className='bg-white p-4 rounded w-11/12'>
            <Text className='text-xl font-bold mb-4 text-center'>
              Select Meal
            </Text>
            <Picker
              selectedValue={mealType}
              onValueChange={(itemValue) => setMealType(itemValue)}
              style={{ width: '100%' }}
            >
              <Picker.Item label='Choose a meal...' value='' />
              <Picker.Item label='Breakfast' value='Breakfast' />
              <Picker.Item label='Lunch' value='Lunch' />
              <Picker.Item label='Dinner' value='Dinner' />
              <Picker.Item label='Snack' value='Snack' />
            </Picker>

            <View className='flex-row justify-between mt-4'>
              <Pressable
                onPress={() => setModalVisible(false)}
                className='bg-gray-300 px-4 py-2 rounded'
              >
                <Text className='text-black'>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  handleSubmit();
                }}
                className='bg-green-500 px-4 py-2 rounded'
              >
                <Text className='text-white'>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
