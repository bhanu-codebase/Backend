// ts.ignore
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/order', require('./routes/OrderRoutes'));
app.use('/rating', require('./routes/ratingRoutes'));
app.use('/restaurants', require('./routes/restaurantRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.get('/', (req, res) => res.send('User Service Running'));

module.exports = app;