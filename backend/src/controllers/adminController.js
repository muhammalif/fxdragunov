const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.comparePassword(password))) {
      console.log(`Gagal login admin: username=${username}`)
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Token generated:', token)
    res.json({ token });
  } catch (error) {
    console.error('Error during admin login:', error)
    res.status(500).json({ error: 'Failed to login' });
  }
};
