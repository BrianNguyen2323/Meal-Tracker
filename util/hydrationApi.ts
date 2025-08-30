export const postWaterRefill = async () => {
  const response = await fetch('api/waterRefill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.err || 'Failed to submit hydration entry');
  }

  return response.json();
};
