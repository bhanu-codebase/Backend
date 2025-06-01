const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8002;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected to restaurant service');
    app.listen(PORT, () => console.log(`🚀 Restaurant Service running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
