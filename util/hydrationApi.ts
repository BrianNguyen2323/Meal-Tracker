export const postWaterRefill = async () => {
  const response = await fetch('api/waterRefill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    let msg = 'Failed to submit water refill entry';
    try {
      const body = await response.json();
      msg = body?.err || body?.error || msg;
    } catch {}
    throw new Error(msg);
  }
  return response.json();
};
