const express = require('express');
const {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// Public Routes
router.get('/', getArticles);
router.get('/:id', getArticleById);

// Protected Routes
router.post('/', authMiddleware, upload.single('image'), createArticle);
router.put('/:id', authMiddleware, upload.single('image'), updateArticle);
router.delete('/:id', authMiddleware, deleteArticle);

module.exports = router;
