import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ err: 'Method Not Allowed' });
  }

  try {
    const { error, data } = await supabase
      .from('Meal')
      .insert({ type: 'Water Refill' })
      .select();

    if (error) return res.status(500).json({ err: error.message });
    return res.status(201).json({ ok: true, data });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ err: e?.message || 'Server Error' });
  }
}
