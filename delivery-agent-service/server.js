const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8003;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected to delivery agent service');
    app.listen(PORT, () => console.log(`🚀 Delivery Agent Service running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
