const express = require('express');
const router = express.Router();
const RestaurantOrder = require('../models/Order');
const { assignDeliveryAgent } = require('../controllers/orderController');

// Accept/Reject order
router.put('/:id/status', async (req, res) => {
  try {
    const order = await RestaurantOrder.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // If accepted → Assign delivery agent (real logic)
    if (req.body.status === 'accepted') {
      const assignment = await assignDeliveryAgent(order._id);
      if (assignment.success) {
        order.deliveryAgentId = assignment.agentId;
        await order.save();
      } else {
        return res.status(400).json({ error: assignment.message || 'No delivery agent available' });
      }
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
