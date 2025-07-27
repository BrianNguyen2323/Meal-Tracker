import { getMeals } from '@/api/mealApi';
import { Alert, Button } from 'react-native';

export default function TestConnection() {
  const test = async () => {
    try {
      const result = await getMeals(); // already returns parsed JSON
      Alert.alert('Success', JSON.stringify(result, null, 2));
      console.log(result);
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Unknown error');
      console.error('Fetch Error:', err);
    }
  };

  return <Button title='Test Connection' onPress={test} />;
}
