const express = require('express');
const router = express.Router();
const supabase = require('./supabaseClient');

// GET request
router.get('/', async (req, res, next) => {
  try {
    const { data, error } = await supabase.from('Meal').select();
    res.json(data);
  } catch (error) {
    console.error('Error: ', error);
    return next({
      log: `Error getting log entries: ${error.message}`,
      status: 502,
      message: {
        err: 'Error getting log entries. Data was not retrieved',
      },
    });
  }
});

// POST request
router.post('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST received', data });
});

router.get('/second', (req, res) => {
  res.json({ message: 'GET request successful' });
});

module.exports = router;
