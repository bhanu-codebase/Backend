const express = require('express');
const router = express.Router();
const { createAgent, updateAgentStatus, getAvailableAgents } = require('../controllers/agentController');

// Create new agent (for testing)
router.post('/', createAgent);

// Update agent status
router.put('/:id/status', updateAgentStatus);

// Get all available agents
router.get('/available', getAvailableAgents);

module.exports = router;