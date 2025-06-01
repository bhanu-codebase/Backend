const axios = require('axios');

const DELIVERY_AGENT_SERVICE_URL = process.env.DELIVERY_AGENT_SERVICE_URL || "http://localhost:8003";

// When order is accepted by restaurant
const assignDeliveryAgent = async (orderId) => {
  try {
    // 1. Get available agents
    const { data: agents } = await axios.get(`${DELIVERY_AGENT_SERVICE_URL}/agents/available`);

    if (agents.length === 0) {
      return { success: false, message: 'No agents available' };
    }

    const agent = agents[0];

    // 2. Assign the agent to this order
    await axios.post(`${DELIVERY_AGENT_SERVICE_URL}/deliveries`, {
      orderId: orderId,
      agentId: agent._id
    });

    // 3. Mark the agent as unavailable
    await axios.put(`${DELIVERY_AGENT_SERVICE_URL}/agents/${agent._id}/status`, {
      status: 'unavailable'
    });

    return { success: true, agentId: agent._id };
  } catch (err) {
    console.error('Delivery Agent Assignment Failed:', err.message);
    return { success: false };
  }
};

module.exports = {
  assignDeliveryAgent
};
