const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available'
  }
});

module.exports = mongoose.model('Agent', agentSchema);
