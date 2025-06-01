// Agent controller for delivery-agent-service
const Agent = require('../models/Agent');

exports.createAgent = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const agent = new Agent({ name });
    const saved = await agent.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAgentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['available', 'unavailable'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const updated = await Agent.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Agent not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvailableAgents = async (req, res) => {
  try {
    const agents = await Agent.find({ status: 'available' });
    res.json(agents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
