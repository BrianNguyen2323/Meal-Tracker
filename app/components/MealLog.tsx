import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const MealLogFrame = () => (
  <SafeAreaProvider>
    <SafeAreaView
      className='h-[525px] w-[95%] border-2 border-t-0 border-blue-500 rounded-b-2xl bg-white self-center overflow-hidden'
      style={{ paddingTop: StatusBar.currentHeight }}
      edges={['top']}
    >
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={true}
      >
        <Text className='text-2xl p-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut enim ad minim veniam.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut enim ad minim veniam.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </Text>
        <Text className='text-2xl p-3'>Test</Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const MealLog = () => {
  return (
    <View className='w-full items-center'>
      <Text className='text-2xl text-center bg-[#E6E6FA] border-2 border-blue-500 border-b-0 w-[95%] py-2 rounded-t-2xl'>
        Meal Log
      </Text>
      <MealLogFrame />
    </View>
  );
};

export default MealLog;
