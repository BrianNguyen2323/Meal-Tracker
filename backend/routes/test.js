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

// TODO: POST request
router.post('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST received', data });
});

// Tested different address GET request
router.get('/second', (req, res) => {
  res.json({ message: 'GET request successful' });
});

// TODO: UPDATE request
// TODO: DELETE request

module.exports = router;
