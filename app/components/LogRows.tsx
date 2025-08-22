import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { Text, View } from 'react-native';
import DeleteButton from './deleteButton';
import EditButton from './editButton';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

type Meal = {
  id: number;
  type: string;
  timeFed: string;
};

export default function GenerateRows({
  meals,
  onSubmitSuccess,
}: {
  meals: Meal[];
  onSubmitSuccess: () => void;
}) {
  return (
    <View className='w-[full]'>
      {meals.map((entry, index) => (
        <View
          key={entry.id}
          className={`w-full flex flex-row justify-between items-center ${
            index % 2 === 0 ? 'bg-gray-100' : 'bg-transparent'
          }`}
        >
          <Text className='items-end font-bold md:text-2xl text-xl'>
            {entry.timeFed
              ? `${dayjs(entry.timeFed)
                  .tz('America/Los_Angeles')
                  .format('M/D/YY')}`
              : ''}
          </Text>
          <Text className='md:text-xl text-black p-3'>{entry.type}</Text>
          <View className='items-end flex flex-row md:space-x-8 space-x-4'>
            <EditButton mealID={entry.id} onSubmitSuccess={onSubmitSuccess} />
            <DeleteButton mealID={entry.id} onSubmitSuccess={onSubmitSuccess} />
          </View>
        </View>
      ))}
    </View>
  );
}
