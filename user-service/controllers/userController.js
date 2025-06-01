// User controller for user-service
const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;
    if (!name || !email || !address || !password) {
      return res.status(400).json({ error: 'Name, email, address, and password are required' });
    }
    const user = new User({ name, email, address, password });
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: err.message });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
