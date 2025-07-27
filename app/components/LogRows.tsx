import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { Text, View } from 'react-native';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

type Meal = {
  id: string;
  type: string;
  timeFed: string;
};

export default function GenerateRows({ meals }: { meals: Meal[] }) {
  return (
    <View className='w-full'>
      {meals.map((entry, index) => (
        <View
          key={entry.id}
          className={`w-full flex flex-row justify-between items-center ${
            index % 2 === 0 ? 'bg-gray-100' : 'bg-transparent'
          }`}
        >
          <Text className='text-2xl text-black p-3'>{entry.type}</Text>
          <Text className='items-end'>
            {entry.timeFed
              ? `${dayjs(entry.timeFed)
                  .tz('America/Los_Angeles')
                  .format('MMM D, YYYY h:mm A')}`
              : ''}
          </Text>
        </View>
      ))}
    </View>
  );
}
