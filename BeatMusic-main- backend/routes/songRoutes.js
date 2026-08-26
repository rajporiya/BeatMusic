const express = require('express');
const router = express.Router();
const { getSongs } = require('../controllers/songController');
const { protect } = require('../middleware/authMiddleware');

// Routes mounted at /api/songs (protected by JWT middleware)
router.get('/', protect, getSongs);

module.exports = router;
