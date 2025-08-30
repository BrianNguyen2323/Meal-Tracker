import { postWaterRefill } from '@/util/hydrationApi';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, Text, View } from 'react-native';

type WaterRefillButtonProps = {
  onSubmitSuccess: () => void;
};

export default function WaterRefillButton({
  onSubmitSuccess,
}: WaterRefillButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleWaterRefillSubmit = async () => {
    try {
      await postWaterRefill();
      Alert.alert('Success', 'Water Refill entry added!');
      onSubmitSuccess();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Pressable
        onPress={() => setModalVisible(true)}
        className='w-18 h-18 md:w-22 md:h-22 rounded border-2 border-blue-600 bg-white items-center justify-center'
      >
        <Text className='md:text-2xl text-xl'>💧</Text>
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
              Add an entry of water refilled?
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
                  handleWaterRefillSubmit();
                }}
                className='bg-blue-500 px-4 py-2 rounded'
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
