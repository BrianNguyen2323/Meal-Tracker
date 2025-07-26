import { Text, View } from 'react-native';

export default function Header() {
  return (
    <View className='flex flex-column items-center text-center bg-[#E6E6FA] border-2 border-blue-500 border-b-0 w-[95%] py-2 rounded-t-2xl'>
      <Text className='text-2xl pb-1 font-semibold'> Meal Log</Text>
      <View className='bg-gray-400 h-[1px] w-[90%] self-center' />
      <View className='flex flex-row pt-2 w-[90%]'>
        <Text className='text-gray-500 italic text-xl font-medium'>Meal</Text>
        <Text className='ml-36 text-gray-500 italic text-xl font-medium'>
          Date & Time
        </Text>
      </View>
    </View>
  );
}
