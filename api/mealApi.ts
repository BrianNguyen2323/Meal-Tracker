// import { BASE_URL } from './constants';
// Would import BASE_URL from constants file if the detection of web or ios was working properly. Manual switching is necessary
// web use
// const BASE_URL = 'http://localhost:4000';
// mobile use
const BASE_URL = 'http://192.168.68.54:4000';

export const getMeals = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Failed to fetch meals');
  return response.json();
};

export const postMeal = async (mealType: string) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mealType }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.err || 'Failed to submit meal');
  }

  return response.json();
};

// const handleGetRequest = async () => {
//   try {
//     //web test address
//     const response = await fetch('http://localhost:4000/');
//     //ios test address
//     // const response = await fetch('http://192.168.68.55:4000/test');
//     const json = await response.json();
//     Alert.alert('Resonse', JSON.stringify(json));
//     console.log('Response: ', JSON.stringify(json));
//   } catch (error) {
//     console.log('Error fetching data: ', error);
//     Alert.alert('Error', 'failed to fetch from backend');
//   }
// };

// const handleGetRequestTest = async () => {
//   try {
//     const response = await fetch('http://localhost:4000/second');
//     const json = await response.json();
//     console.log('Response: ', JSON.stringify(json));
//   } catch (error) {
//     console.log('Error fetching data: ', error);
//   }
// };

//TODO: set up update and delete
