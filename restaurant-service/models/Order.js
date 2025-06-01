const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: String,
  restaurantId: String,
  status: {
    type: String,
    enum: ['accepted', 'rejected', 'pending'],
    default: 'pending'
  },
  deliveryAgentId: { type: String, default: null }
});

module.exports = mongoose.model('RestaurantOrder', orderSchema);
