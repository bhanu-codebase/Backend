// Restaurant controller for restaurant-service
const Restaurant = require('../models/Restaurant');

exports.createRestaurant = async (req, res) => {
  try {
    const { name, status, menu, openHours } = req.body;
    if (!name || !menu || !Array.isArray(menu) || menu.length === 0 || !openHours || !Array.isArray(openHours)) {
      return res.status(400).json({ error: 'Name, menu (array), and openHours (array) are required' });
    }
    const restaurant = new Restaurant({ name, status, menu, openHours });
    const saved = await restaurant.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRestaurantStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['online', 'offline'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMenu = async (req, res) => {
  try {
    const { menu } = req.body;
    if (!menu || !Array.isArray(menu) || menu.length === 0) {
      return res.status(400).json({ error: 'Menu (array) is required' });
    }
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { menu },
      { new: true }
    );
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvailableRestaurants = async (req, res) => {
  try {
    const hour = parseInt(req.query.hour);
    if (isNaN(hour)) {
      return res.status(400).json({ error: 'hour query param is required and must be a number' });
    }
    const restaurants = await Restaurant.find({
      status: 'online',
      openHours: hour
    });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
