const express = require('express');
const rateLimit = require('express-rate-limit')
const { login } = require('../controllers/adminController');

const router = express.Router();

// Konfigurasi rate limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 5, // batas maksimum 5 permintaan per windowMs
    message: 'Terlalu banyak permintaan login dari IP ini, silahkan coba lagi nanti'
})


router.post('/login', loginLimiter, login);

module.exports = router;
