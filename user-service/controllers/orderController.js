// Order controller for user-service
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { userId, restaurantId, items } = req.body;
    if (!userId || !restaurantId || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'userId, restaurantId, and items (array) are required' });
    }
    const order = new Order({ userId, restaurantId, items });
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
