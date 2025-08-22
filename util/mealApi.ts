const BASE_URL = '/api/meals';

export const getMeals = async () => {
  const response = await fetch(BASE_URL);
  // Log the raw response for debugging
  const text = await response.text();
  console.log('Raw response from API:', text);
  // Try to parse as JSON (may throw if not valid JSON)
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    throw e;
  }
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
  console.log('before calling fetch');

  const response = await fetch(`${BASE_URL}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mealID, mealType }),
  });

  console.log('Response:', response.status, response.statusText);

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
  const response = await fetch(`${BASE_URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mealID }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.err || 'Failed to delete meal');
  }

  // skip parsing JSON if the response is a 204 code
  if (response.status === 204) return;

  return response.json();
};
