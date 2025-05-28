const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
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

// Uploads
const uploadDir = path.join(__dirname, '../../uploads/images'); // ⬅️ Perbaiki path relatif
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Upload directory created:', uploadDir);
}

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) cb(null, true);
    else cb('Error: Images Only!');
  },
});

app.use('/uploads', express.static(uploadDir));
app.use('/api/articles', articleRoutes);
app.use('/api/admin', adminRoutes);

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
