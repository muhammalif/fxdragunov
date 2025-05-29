const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');

console.log('Before dotenv config');
require('dotenv').config();
console.log('After dotenv config');

console.log('Before require routes');
const articleRoutes = require('../src/routes/articleRoutes');
const adminRoutes = require('../src/routes/adminRoutes');
console.log('After require routes');

const app = express();
console.log('Express app initialized');

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
console.log('Middleware applied');

// Uploads - Removed local file system logic

// Configure routes
app.use('/api/articles', articleRoutes);
app.use('/api/admin', adminRoutes);
console.log('Routes configured');

// Add a root route handler
app.get('/', (req, res) => {
  console.log('Root route handler called');
  res.status(200).send('Backend API is running!');
});

// Optional: Add handlers for favicon to prevent timeouts on these requests
app.get(['/favicon.ico', '/favicon.png'], (req, res) => {
    console.log('Favicon route handler called');
    res.status(404).send(); // Return 404 for favicon requests
});

// DB Connect
console.log('Before DB connect check');
if (!mongoose.connection.readyState) {
  console.log('Connecting to MongoDB...');
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
} else {
  console.log('MongoDB already connected');
}
console.log('After DB connect logic');

// Export handler
console.log('Before exporting handler');
module.exports = serverless(app);
console.log('After exporting handler');
