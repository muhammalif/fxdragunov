
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Mock articles data
  const articles = [
    {
      id: 1,
      title: "Understanding Forex Market Trends",
      content: "Learn how to identify and follow market trends in forex trading. This comprehensive guide covers technical analysis, chart patterns, and trend indicators that can help you make better trading decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      createdAt: "2024-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Expert Advisor Development Best Practices",
      content: "Discover the key principles for developing robust and profitable expert advisors. From coding standards to risk management, this article covers everything you need to know.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      title: "Risk Management in Forex Trading",
      content: "Master the art of risk management to protect your trading capital. Learn about position sizing, stop losses, and portfolio diversification strategies.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      createdAt: "2024-01-08"
    },
    {
      id: 4,
      title: "Technical Indicators Every Trader Should Know",
      content: "Explore the most important technical indicators used in forex trading. From moving averages to RSI, understand how to use these tools effectively.",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      createdAt: "2024-01-05"
    },
    {
      id: 5,
      title: "Psychology of Successful Trading",
      content: "The mental aspect of trading is often overlooked. Learn how to develop the right mindset and emotional discipline for consistent trading success.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      createdAt: "2024-01-03"
    }
  ];

  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticle = searchTerm === '' && filteredArticles.length > 0 ? filteredArticles.find(a => a.featured) : null;
  const recentArticles = filteredArticles.filter(article => !article.featured || searchTerm !== '');

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = recentArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(recentArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6 lg:px-16 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Trading <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest forex trading strategies, market analysis, and expert insights
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Featured Article</h2>
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{new Date(featuredArticle.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredArticle.content.substring(0, 150)}...
                  </p>
                  <Link 
                    to={`/articles/${featuredArticle.id}`}
                    className="text-orange-400 hover:text-orange-500 flex items-center font-medium"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            {searchTerm ? 'Search Results' : 'Latest Articles'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
              <Card key={article.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{new Date(article.createdAt).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white hover:text-orange-400 transition-colors">
                    <Link to={`/articles/${article.id}`}>
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.content.substring(0, 120)}...
                  </CardDescription>
                  <Link 
                    to={`/articles/${article.id}`}
                    className="text-orange-400 hover:text-orange-500 flex items-center font-medium"
                  >
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === idx + 1
                      ? 'bg-orange-400 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
