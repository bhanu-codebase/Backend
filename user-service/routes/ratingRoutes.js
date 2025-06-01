const express = require('express');
const router = express.Router();
const { createRating, getUserRatings } = require('../controllers/ratingController');

// POST /rating → Add rating
router.post('/', createRating);

// POST /rating/user → Get all ratings for a user's orders (send { orderIds: [...] } in body)
router.post('/user', getUserRatings);

module.exports = router;
