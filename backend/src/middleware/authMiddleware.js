const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Mendapatkan token dari header Authorization

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Menyimpan info user yang didecode dari token
        next(); // Lanjut ke fungsi berikutnya
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
