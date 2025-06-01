const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  for: {
    type: String,
    enum: ['restaurant', 'agent']
  }
});

module.exports = mongoose.model('Rating', ratingSchema);
