const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/restaurants', require('./routes/restaurantRoutes'));
app.use('/order', require('./routes/orderRoutes'));

app.get('/', (req, res) => res.send('Restaurant Service Running'));

module.exports = app;
