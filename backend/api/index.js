const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const articleRoutes = require('../src/routes/articleRoutes');
const adminRoutes = require('../src/routes/adminRoutes');

const app = express();

app.use((req, res, next) => {
  console.log('Incoming Request:', req.method, req.originalUrl);
  next();
});

const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Uploads - Removed local file system logic

// Configure routes
app.use('/api/articles', articleRoutes);
app.use('/api/admin', adminRoutes);

// Add a root route handler
app.get('/', (req, res) => {
  res.status(200).send('Backend API is running!');
});

// Optional: Add handlers for favicon to prevent timeouts on these requests
app.get(['/favicon.ico', '/favicon.png'], (req, res) => {
    res.status(404).send(); // Return 404 for favicon requests
});

// DB Connect
if (!mongoose.connection.readyState) {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

// Export handler
module.exports = serverless(app);
