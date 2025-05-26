const Article = require('../models/articleModel');
const fs = require('fs');
const path = require('path');

// Get all articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

// Get article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch article' });
  }
};

// Create new article
exports.createArticle = async (req, res) => {
  try {
    const article = new Article({
      title: req.body.title,
      content: req.body.content,
      image: req.file ? `/uploads/images/${req.file.filename}` : null, // Path to image
    });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create article' });
  }
};

// Update article by ID
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Check if there is a new image uploaded
    if (req.file) {
      // Delete the old image if exists
      if (article.image) {
        const oldImagePath = path.join(__dirname, '..', '..', article.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // Set new image path
      req.body.image = `/uploads/images/${req.file.filename}`;
    }

    // Update article fields
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update article' });
  }
};

// Delete article by ID
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Delete associated image if exists
    if (article.image) {
      const imagePath = path.join(__dirname, '..', '..', article.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete article' });
  }
};
