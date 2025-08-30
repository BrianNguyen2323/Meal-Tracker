import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

if (req.method === 'POST') {
  const { data, error } = await supabase
    .from('Meal')
    .insert({ type: 'Water Refill' })
    .select();

  if (error) return res.status(500).json({ err: error.message });
  return res.status(201).json(data);
}
