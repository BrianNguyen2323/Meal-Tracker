// import { BASE_URL } from './constants';
// Would import BASE_URL from constants file if the detection of web or ios was working properly. Manual switching is necessary
// web use
// const BASE_URL = 'http://localhost:4000';
// mobile use
const BASE_URL = 'http://192.168.68.53:4000';

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

export const updateMeal = async (mealID: number, newMealType: string) => {
  const response = await fetch(BASE_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newMealType }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.err || 'Failed to update meal');
  }

  return response.json();
};

//TODO: set up update and delete
