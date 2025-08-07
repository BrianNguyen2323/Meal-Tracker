const express = require('express');
const router = express.Router();
const supabase = require('./supabaseClient');

// GET request
router.get('/', async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('Meal')
      .select()
      .order('timeFed', { ascending: false })
      .limit(15);

    if (error) {
      return next({
        log: `Supabase error: ${error.message}`,
        status: 500,
        message: { err: 'Failed to retrieve meals from database.' },
      });
    }

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
router.post('/', async (req, res, next) => {
  try {
    const { mealType } = req.body;

    if (!mealType) {
      return res.status(400).json({ err: 'mealType is required' });
    }

    const { data, error } = await supabase
      .from('Meal')
      .insert({ type: mealType })
      .select();

    if (error) {
      return next({
        log: `Supabase error: ${error.message}`,
        status: 500,
        message: { err: 'Failed to create meal into database.' },
      });
    }
    res.status(201).json(data);
  } catch (error) {
    console.error('Error: ', error);
    return next({
      log: `Error creating new entry: ${error.message}`,
      status: 502,
      message: {
        err: 'Error creating new entry with POST request',
      },
    });
  }
});

// PUT request
router.patch('/:id', async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { mealType } = req.body;

    const { error } = await supabase
      .from('Meal')
      .update({ type: mealType })
      .eq('id', id);

    if (error) {
      return next({
        log: `Supabase error: ${error.message}`,
        status: 500,
        message: { err: 'Failed to update meal type database.' },
      });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error: ', error);
    return next({
      log: `Error updating entry: ${error.message}`,
      status: 502,
      message: {
        err: 'Error updating entry with PUT request',
      },
    });
  }
});

// DELETE request
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const mealID = parseInt(id, 10);

    const { error } = await supabase.from('Meal').delete().eq('id', mealID);

    if (error) {
      return next({
        log: `Supabase error: ${error.message}`,
        status: 500,
        message: { err: 'Failed to delete entry from database.' },
      });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error: ', error);
    return next({
      log: `Error deleting entry: ${error.message}`,
      status: 502,
      message: {
        err: 'Error deleting entry with DELETE request',
      },
    });
  }
});

// Tested different address GET request
router.get('/second', (req, res) => {
  res.json({ message: 'GET request successful' });
});

module.exports = router;
