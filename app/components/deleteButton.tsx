import { deleteMeal } from '@/api/mealApi';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';

type DeleteButtonProps = {
  mealID: number;
  onSubmitSuccess: () => void;
};

export default function DeleteButton({
  mealID,
  onSubmitSuccess,
}: DeleteButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteSubmit = async () => {
    try {
      await deleteMeal(mealID);
      Alert.alert('Success', 'Meal deleted!');
      onSubmitSuccess();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Pressable
        className='p-2 border-2 rounded bg-transparent border-red-500  text-center'
        onPress={() => setModalVisible(true)}
      >
        <Text className='text-red-500'>Delete</Text>
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
              Are you sure you want to delete?
            </Text>
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
                  handleDeleteSubmit();
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
