const express = require('express');
const router = express.Router();
const { createUser, getUserProfile } = require('../controllers/userController');

// POST /users → Create a new user
router.post('/', createUser);

// GET /users/:id → Get user profile
router.get('/:id', getUserProfile);

module.exports = router;
