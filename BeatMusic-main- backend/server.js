require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { seedSongs } = require('./controllers/songController');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB().then(() => {
  // Seed initial song data
  seedSongs();
});

// Middleware configurations
app.use(cors());
app.use(express.json());

// Routes mounts
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/songs', require('./routes/songRoutes'));

app.listen(PORT, () => {
  console.log(`BeatMusic modular backend server running on port ${PORT}`);
});
