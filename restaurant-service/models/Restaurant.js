const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  status: { type: String, enum: ['online', 'offline'], default: 'offline' },
  menu: [
    {
      name: String,
      price: Number
    }
  ],
  openHours: [Number] // Example: [12, 13, 14]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
