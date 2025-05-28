const Article = require('../models/articleModel');
const { put, del } = require('@vercel/blob');

// Get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

// Get article by ID
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    console.error('Failed to fetch article:', error);
    res.status(500).json({ error: 'Failed to fetch article' });
  }
};

// Create new article
const createArticle = async (req, res) => {
  try {
    let imageUrl = null;
    if (req.file) {
      // Upload image to Vercel Blob
      const blob = await put(`article-images/${req.file.originalname}`, req.file.buffer, {
        access: 'public',
      });
      imageUrl = blob.url;
    }

    const article = new Article({
      title: req.body.title,
      content: req.body.content,
      image: imageUrl, // Store the Vercel Blob URL
    });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.error('Failed to create article:', error);
    res.status(500).json({ error: 'Failed to create article' });
  }
};

// Update article by ID
const updateArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Check if there is a new image uploaded
    if (req.file) {
      // Delete the old image from Vercel Blob if exists
      if (article.image) {
        try {
          // Extract the path from the URL
          const urlParts = article.image.split('/');
          const filename = urlParts[urlParts.length - 1];
          const oldBlobPath = `article-images/${filename}`;
          await del(oldBlobPath);
        } catch (deleteError) {
          console.error('Failed to delete old blob:', deleteError);
          // Continue even if old blob deletion fails
        }
      }

      // Upload new image to Vercel Blob
      const blob = await put(`article-images/${req.file.originalname}`, req.file.buffer, {
        access: 'public',
      });
      req.body.image = blob.url; // Set new image URL
    } else if (req.body.image === null) {
        // If the frontend explicitly sends image: null, delete the old image
        if (article.image) {
            try {
              const urlParts = article.image.split('/');
              const filename = urlParts[urlParts.length - 1];
              const oldBlobPath = `article-images/${filename}`;
              await del(oldBlobPath);
            } catch (deleteError) {
              console.error('Failed to delete old blob:', deleteError);
              // Continue even if old blob deletion fails
            }
          }
        req.body.image = null; // Ensure the image field is set to null in DB
    }

    // Update article fields
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedArticle);
  } catch (error) {
    console.error('Failed to update article:', error);
    res.status(500).json({ error: 'Failed to update article' });
  }
};

// Delete article by ID
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Delete associated image from Vercel Blob if exists
    if (article.image) {
        try {
            const urlParts = article.image.split('/');
            const filename = urlParts[urlParts.length - 1];
            const blobPath = `article-images/${filename}`;
            await del(blobPath);
        } catch (deleteError) {
            console.error('Failed to delete blob on article deletion:', deleteError);
            // Continue even if blob deletion fails
        }
    }

    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Failed to delete article:', error);
    res.status(500).json({ error: 'Failed to delete article' });
  }
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};