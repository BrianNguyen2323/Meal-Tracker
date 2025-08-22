import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  // --- CORS headers ---
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let body = {};
  if (req.method !== 'GET') {
    try {
      if (
        req.body &&
        typeof req.body === 'object' &&
        Object.keys(req.body).length > 0
      ) {
        body = req.body;
      } else {
        body = JSON.parse(
          await new Promise((resolve, reject) => {
            let data = '';
            req.on('data', (chunk) => (data += chunk));
            req.on('end', () => resolve(data || '{}'));
            req.on('error', reject);
          })
        );
      }
    } catch (e) {
      return res.status(400).json({ err: 'Invalid JSON body' });
    }
  }

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
      const { mealType } = body;
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
      const { id, mealType } = body;
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
      const { id } = body;
      if (!id) return res.status(400).json({ err: 'id is required' });

      const { error } = await supabase.from('Meal').delete().eq('id', id);

      if (error) return res.status(500).json({ err: error.message });
      return res.status(204).end();
    }

    res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
