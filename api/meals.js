const supabase = require('../backend/routes/supabaseClient');

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('Meal')
        .select()
        .order('timeFed', { ascending: false })
        .limit(15);

      if (error) return res.status(500).json({ err: error.message });
      return res.status(200).json(data);
    }

    if (req.method === 'POST') {
      const { mealType } = req.body;
      if (!mealType)
        return res.status(400).json({ err: 'mealType is required' });

      const { data, error } = await supabase
        .from('Meal')
        .insert({ type: mealType })
        .select();

      if (error) return res.status(500).json({ err: error.message });
      return res.status(201).json(data);
    }

    if (req.method === 'PATCH') {
      const { id, mealType } = req.body;
      if (!id || !mealType)
        return res.status(400).json({ err: 'id and mealType are required' });

      const { error } = await supabase
        .from('Meal')
        .update({ type: mealType })
        .eq('id', id);

      if (error) return res.status(500).json({ err: error.message });
      return res.status(204).end();
    }

    if (req.method === 'DELETE') {
      const { id } = req.body;
      if (!id) return res.status(400).json({ err: 'id is required' });

      const { error } = await supabase.from('Meal').delete().eq('id', id);

      if (error) return res.status(500).json({ err: error.message });
      return res.status(204).end();
    }

    res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
