import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import GenerateRows from './LogRows';

const MealLogFrame = () => (
  <SafeAreaProvider>
    <SafeAreaView
      className='h-[525px] w-[95vw] border-2 border-t-0 border-blue-500 rounded-b-2xl bg-white self-center overflow-hidden'
      style={{ paddingTop: StatusBar.currentHeight }}
      edges={['top']}
    >
      <ScrollView
        className='flex-1 w-full'
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={true}
      >
        <View className='flex w-full content-start px-3'>
          <GenerateRows />
        </View>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const MealLog = () => {
  return (
    <View className='w-full items-center'>
      <Header />
      <MealLogFrame />
    </View>
  );
};

export default MealLog;
