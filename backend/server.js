require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const articleRoutes = require('./src/routes/articleRoutes');
const adminRoutes = require('./src/routes/adminRoutes');

const app = express();

// Configure CORS to allow specific origins
const allowedOrigins = [
  'http://localhost:8080', // Allow local development
  'http://localhost:8081',
  process.env.LANDING_PAGE_URL, // Vercel domain for landing page
  process.env.ADMIN_URL // Vercel domain for admin dashboard
].filter(Boolean); // Filter out any undefined/null values

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Check folder upload
const uploadDir = './uploads/images';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Upload directory created:', uploadDir);
} else {
  console.log('Upload directory exists:', uploadDir);
}

// Setup Multer
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_${file.originalname}`;
    console.log('Uploading file:', filename);
    cb(null, filename);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1 MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  },
});

app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use('/api/articles', articleRoutes);
app.use('/api/admin', adminRoutes);

// MongoDB connection and server startup
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
