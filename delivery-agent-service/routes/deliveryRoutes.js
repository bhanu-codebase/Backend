const express = require('express');
const router = express.Router();
const { createDelivery, updateDeliveryStatus, getAgentDeliveries } = require('../controllers/deliveryController');

// Assign a delivery to an agent
router.post('/', createDelivery);

// Update delivery status (picked, on the way, delivered)
router.put('/:id/status', updateDeliveryStatus);

// GET /deliveries/agent/:agentId → Get all deliveries for an agent
router.get('/agent/:agentId', getAgentDeliveries);

module.exports = router;