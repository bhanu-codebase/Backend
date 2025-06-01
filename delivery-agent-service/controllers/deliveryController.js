// Delivery controller for delivery-agent-service
const Delivery = require('../models/Delivery');

exports.createDelivery = async (req, res) => {
  try {
    const { orderId, agentId } = req.body;
    if (!orderId || !agentId) {
      return res.status(400).json({ error: 'orderId and agentId are required' });
    }
    const delivery = new Delivery({ orderId, agentId });
    const saved = await delivery.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['picked', 'on the way', 'delivered'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const updated = await Delivery.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Delivery not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAgentDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find({ agentId: req.params.agentId });
    res.json(deliveries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
