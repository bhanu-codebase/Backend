const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  orderId: String,
  agentId: String,
  status: {
    type: String,
    enum: ['picked', 'on the way', 'delivered'],
    default: 'picked'
  }
});

module.exports = mongoose.model('Delivery', deliverySchema);
