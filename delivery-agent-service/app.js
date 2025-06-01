const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/agents', require('./routes/agentRoutes'));
app.use('/deliveries', require('./routes/deliveryRoutes'));

app.get('/', (req, res) => res.send('Delivery Agent Service Running'));

module.exports = app;
