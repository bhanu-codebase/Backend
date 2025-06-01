const axios = require('axios');

// When order is accepted by restaurant
const assignDeliveryAgent = async (orderId) => {
  try {
    // 1. Get available agents
    const { data: agents } = await axios.get('http://localhost:8003/agents/available');

    if (agents.length === 0) {
      return { success: false, message: 'No agents available' };
    }

    const agent = agents[0];

    // 2. Assign the agent to this order
    await axios.post('http://localhost:8003/deliveries', {
      orderId: orderId,
      agentId: agent._id
    });

    // 3. Mark the agent as unavailable
    await axios.put(`http://localhost:8003/agents/${agent._id}/status`, {
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
