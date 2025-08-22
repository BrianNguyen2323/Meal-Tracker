import { updateMeal } from '@/util/mealApi';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';

type EditButtonProps = {
  mealID: number;
  onSubmitSuccess: () => void;
};

export default function EditButton({
  mealID,
  onSubmitSuccess,
}: EditButtonProps) {
  const [mealType, setMealType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleEditSubmit = async () => {
    if (!mealType) {
      Alert.alert('Error', 'Please select a meal type');
      return;
    }

    try {
      console.log('Submitting meal update:', { mealID, mealType });
      await updateMeal(mealID, mealType);
      Alert.alert('Success', 'Meal updated!');
      setMealType('');
      onSubmitSuccess();
    } catch (error: any) {
      Alert.alert('Error', error.message);
      console.log(mealID);
    }
  };

  return (
    <View>
      <Pressable
        className='p-2 border-2 rounded bg-transparent border-blue-500  text-center'
        onPress={() => setModalVisible(true)}
      >
        <Text className='text-blue-500'>Edit</Text>
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
              <Picker.Item color='black' label='Choose a meal...' value='' />
              <Picker.Item color='black' label='Breakfast' value='Breakfast' />
              <Picker.Item color='black' label='Lunch' value='Lunch' />
              <Picker.Item color='black' label='Dinner' value='Dinner' />
              <Picker.Item color='black' label='Snack' value='Snack' />
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
                  handleEditSubmit();
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
