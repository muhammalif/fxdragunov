const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Assuming you are using Mongoose
// Import your route handlers and middleware here
const articleRoutes = require('../src/routes/articleRoutes');
const adminRoutes = require('../src/routes/adminRoutes');
const authMiddleware = require('../src/middleware/authMiddleware');

// Database connection setup (adapting for serverless)
const connectDB = async () => {
  try {
    // Ensure the MONGO_URI environment variable is set in Vercel
    if (mongoose.connections[0].readyState) {
      console.log('MongoDB already connected');
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      // Add any necessary Mongoose connection options for serverless here
      // serverSelectionTimeoutMS: 5000, // Example option
    });
    console.log('MongoDB connected (native handler)');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // In a real app, you might want to handle this more gracefully
    // process.exit(1); // Exiting in serverless might not be desired
  }
};

const app = express();

// Add your middleware
const allowedOrigins = [
  'https://fxdragunov-admin.vercel.app',
  'https://fxdragunov.vercel.app',
  'http://localhost:8080', // Local
  'http://localhost:8081', // Local
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.json()); // For parsing application/json
// If you have other middleware (e.g., urlencoded, cookie-parser, etc.), add them here
// Example of using authMiddleware for protected routes:
// app.use('/api/protected', authMiddleware, protectedRoutes);

// Mount your route handlers
console.log('Mounting article routes at /api/articles');
app.use('/api/articles', articleRoutes);
console.log('Mounting admin routes at /api/admin');
app.use('/api/admin', authMiddleware, adminRoutes);

// Temporary test route
app.post('/api/admin/test', (req, res) => {
  console.log('Test POST route /api/admin/test reached');
  res.status(200).send('Test route successful');
});

// Add all your specific API routes here
app.get('/', (req, res) => {
  res.send('Express app is running!');
});

// Export the Vercel serverless handler function
// This function will be executed for each incoming request
module.exports = async (req, res) => {
  console.log('Received request. Method:', req.method, 'Origin:', req.headers.origin);

  // Ensure DB connection before handling request
  await connectDB();

  // Let the Express app handle the incoming request and response
  // This approach works because Vercel's Node.js runtime provides compatible req/res objects
  app(req, res);
};
