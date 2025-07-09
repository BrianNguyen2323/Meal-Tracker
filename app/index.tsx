import { Button } from '@react-navigation/elements';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  //route calls and handlers
  const handleGetRequest = async () => {
    try {
      //web test address
      const response = await fetch('http://localhost:4000/');
      //ios test address
      // const response = await fetch('http://192.168.68.55:4000/test');
      const json = await response.json();
      Alert.alert('Resonse', JSON.stringify(json));
      console.log('Response: ', JSON.stringify(json));
    } catch (error) {
      console.log('Error fetching data: ', error);
      Alert.alert('Error', 'failed to fetch from backend');
    }
  };

  const handleGetRequestTest = async () => {
    try {
      const response = await fetch('http://localhost:4000/second');
      const json = await response.json();
      console.log('Response: ', JSON.stringify(json));
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <text className='text-3xl text-green-600'>tailwind test</text> */}
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={styles.container}>
        <Button onPress={handleGetRequest}>'Call GET Endpoint'</Button>
        <Button onPress={handleGetRequestTest}>'Call GET Test Route'</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
