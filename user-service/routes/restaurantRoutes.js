const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET /restaurants?hour=14 → Get available restaurants from restaurant-service
router.get('/', async (req, res) => {
  try {
    const hour = req.query.hour;
    const { data } = await axios.get(`http://localhost:8002/restaurants?hour=${hour}`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

module.exports = router;
