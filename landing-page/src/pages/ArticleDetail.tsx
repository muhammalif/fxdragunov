
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ArticleDetail = () => {
  const { id } = useParams();

  // Mock article data - in a real app, you'd fetch this based on the ID
  const article = {
    id: parseInt(id || '1'),
    title: "Understanding Forex Market Trends",
    content: `
      <p>The foreign exchange market, commonly known as Forex or FX, is the largest financial market in the world. Understanding market trends is crucial for successful trading and investment decisions.</p>
      
      <h2>What Are Market Trends?</h2>
      <p>Market trends represent the general direction in which a market or asset is moving. In forex trading, trends can be classified into three main categories:</p>
      
      <ul>
        <li><strong>Upward Trends (Bull Markets):</strong> Characterized by higher highs and higher lows</li>
        <li><strong>Downward Trends (Bear Markets):</strong> Characterized by lower highs and lower lows</li>
        <li><strong>Sideways Trends (Range-bound Markets):</strong> Price moves within a horizontal range</li>
      </ul>
      
      <h2>Technical Analysis Tools</h2>
      <p>Several technical indicators can help identify and confirm market trends:</p>
      
      <h3>Moving Averages</h3>
      <p>Moving averages smooth out price data to identify the direction of the trend. The most commonly used are:</p>
      <ul>
        <li>Simple Moving Average (SMA)</li>
        <li>Exponential Moving Average (EMA)</li>
        <li>Weighted Moving Average (WMA)</li>
      </ul>
      
      <h3>Trend Lines</h3>
      <p>Trend lines are straight lines that connect two or more price points and extend into the future to act as support or resistance levels.</p>
      
      <h2>Risk Management</h2>
      <p>Understanding trends is only part of successful trading. Proper risk management includes:</p>
      <ul>
        <li>Setting appropriate stop-loss levels</li>
        <li>Position sizing based on account balance</li>
        <li>Diversification across different currency pairs</li>
        <li>Regular review and adjustment of trading strategies</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering trend analysis in forex trading requires practice, patience, and continuous learning. By combining technical analysis with fundamental understanding and proper risk management, traders can improve their chances of success in the dynamic forex market.</p>
    `,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    createdAt: "2024-01-15",
    author: "Trading Expert",
    readTime: "8 min read",
    tags: ["Forex", "Technical Analysis", "Trading Strategy"]
  };

  // Mock related articles
  const relatedArticles = [
    {
      id: 2,
      title: "Expert Advisor Development Best Practices",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      title: "Risk Management in Forex Trading",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      createdAt: "2024-01-08"
    },
    {
      id: 4,
      title: "Technical Indicators Every Trader Should Know",
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      createdAt: "2024-01-05"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6 lg:px-16 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/articles"
            className="inline-flex items-center text-orange-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                {article.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Articles */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      to={`/articles/${relatedArticle.id}`}
                      className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-orange-400 transition-colors line-clamp-2 mb-1">
                          {relatedArticle.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(relatedArticle.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <Link
                    to="/articles"
                    className="text-orange-400 hover:text-orange-500 font-medium transition-colors"
                  >
                    View All Articles →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
