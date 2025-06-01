const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders } = require('../controllers/orderController');

// POST /order → Place a new order
router.post('/', createOrder);

// GET /order/user/:id → Get all orders for a user
router.get('/user/:id', getUserOrders);

module.exports = router;
