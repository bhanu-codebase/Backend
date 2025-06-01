const express = require('express');
const router = express.Router();
const { createRestaurant, updateRestaurantStatus, updateMenu, getAvailableRestaurants } = require('../controllers/restaurantController');

// Anyone can add a restaurant
router.post('/', createRestaurant);

// Update restaurant status (online/offline)
router.put('/:id/status', updateRestaurantStatus);

// Update restaurant menu
router.put('/:id/menu', updateMenu);

// Get all online restaurants available at given hour
router.get('/', getAvailableRestaurants);

module.exports = router;
