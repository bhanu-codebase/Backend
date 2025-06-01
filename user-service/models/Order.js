const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurantId: String, // Will get from restaurant service
  items: [String],
  status: {
    type: String,
    enum: ['placed', 'accepted', 'rejected', 'delivered'],
    default: 'placed'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
