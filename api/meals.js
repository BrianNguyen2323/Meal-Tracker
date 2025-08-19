const {
  getMeals,
  postMeal,
  updateMeal,
  deleteMeal,
} = require('../backend/routes/mealRoutes');

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const meals = await getMeals();
      return res.status(200).json(meals);
    }

    if (req.method === 'POST') {
      const { mealType } = req.body;
      if (!mealType)
        return res.status(400).json({ error: 'mealType is required' });

      const newMeal = await postMeal(mealType);
      return res.status(201).json(newMeal);
    }

    if (req.method === 'PUT' || req.method === 'PATCH') {
      const { id, mealType } = req.body;
      if (!id || !mealType)
        return res.status(400).json({ error: 'id and mealType are required' });

      const updated = await updateMeal(id, mealType);
      return res.status(200).json(updated);
    }

    if (req.method === 'DELETE') {
      const { id } = req.body;
      if (!id) return res.status(400).json({ error: 'id is required' });

      const deleted = await deleteMeal(id);
      return res.status(200).json(deleted);
    }

    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
