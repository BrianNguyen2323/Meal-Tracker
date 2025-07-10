const env = require('dotenv');
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

env.config();

const app = express();

const supabase = createClient(
  process.env.DATABASE_URL,
  process.env.DATABASE_KEY
);

app.use(cors());
app.use(express.json());

// Import route file
const testRoutes = require('./routes/mealRoutes');
app.use('/', testRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.log || err);
  res
    .status(err.status || 500)
    .json(err.message || { err: 'Internal server error' });
});

// Double check to see if I need to have supabaseClient in a separate file or in index.js
