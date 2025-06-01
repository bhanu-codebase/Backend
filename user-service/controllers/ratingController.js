// Rating controller for user-service
const Rating = require('../models/Rating');

exports.createRating = async (req, res) => {
  try {
    const { orderId, rating, comment, for: forType } = req.body;
    if (!orderId || !rating || !forType) {
      return res.status(400).json({ error: 'orderId, rating, and for (restaurant/agent) are required' });
    }
    if (!['restaurant', 'agent'].includes(forType)) {
      return res.status(400).json({ error: 'for must be restaurant or agent' });
    }
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'rating must be a number between 1 and 5' });
    }
    const newRating = new Rating({ orderId, rating, comment, for: forType });
    const saved = await newRating.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserRatings = async (req, res) => {
  try {
    // Accepts { orderIds: [ ... ] } in body
    const { orderIds } = req.body;
    if (!orderIds || !Array.isArray(orderIds) || orderIds.length === 0) {
      return res.status(400).json({ error: 'orderIds (array) is required' });
    }
    const ratings = await Rating.find({ orderId: { $in: orderIds } });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
