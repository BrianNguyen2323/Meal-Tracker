// import { BASE_URL } from './constants';
// Would import BASE_URL from constants file if the detection of web or ios was working properly. Manual switching is necessary
// web use
// const BASE_URL = 'http://localhost:4000';
// mobile use
const BASE_URL =
  'http://192.168.68.55:4000https://meal-tracker-git-web-ui-nguyenbrian2323-gmailcoms-projects.vercel.app/';

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

export const updateMeal = async (mealID: number, mealType: string) => {
  const response = await fetch(`${BASE_URL}/${mealID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mealType }),
  });

  if (!response.ok) {
    let err;
    try {
      err = await response.json();
    } catch {
      throw new Error('Failed to update meal (invalid JSON response)');
    }
    throw new Error(err?.err || 'Failed to update meal');
  }

  // skip parsing JSON if the response is a 204 code
  if (response.status === 204) return;

  return response.json();
};

export const deleteMeal = async (mealID: number) => {
  const response = await fetch(`${BASE_URL}/${mealID}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.err || 'Failed to delete meal');
  }

  // skip parsing JSON if the response is a 204 code
  if (response.status === 204) return;

  return response.json();
};

//TODO: set up update and delete
