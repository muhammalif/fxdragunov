import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getArticles, deleteArticle, Article } from '../api/api';
import { Edit, Trash2, Plus, Search, Calendar, Eye } from 'lucide-react';

const ArticleList = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getArticles();
                const sortedArticles = response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setArticles(sortedArticles);
            } catch (err) {
                console.error('Failed to fetch articles:', err);
                setError('Failed to fetch articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const confirmDelete = (id: string) => {
        setArticleToDelete(id);
        setShowModal(true);
    };

    const handleDelete = async () => {
        if (!articleToDelete) return;
        
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found. Please login.');
                return;
            }
            await deleteArticle(articleToDelete, token);
            setArticles(articles.filter(article => article._id !== articleToDelete));
            setShowModal(false);
        } catch (err) {
            console.error('Failed to delete article:', err);
        }
    };

    const truncateContent = (content: string, length: number) => {
        if (content.length > length) {
            return content.substring(0, length) + '...';
        }
        return content;
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Manajemen Artikel</h1>
                        <p className="text-gray-600 mt-1">Kelola dan pantau artikel Anda</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Cari artikel..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        
                        <Link
                            to="/dashboard/articles/add"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            Tambah Artikel
                        </Link>
                    </div>
                </div>
            </div>

            {currentArticles.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-gray-100">
                    <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Belum ada artikel</h3>
                    <p className="text-gray-500">Mulai dengan menambahkan artikel pertama Anda</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {currentArticles.map(article => (
                        <div key={article._id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            {article.image && (
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={`http://localhost:5000${article.image}`} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                    {article.title}
                                </h2>
                                
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {truncateContent(article.content, 150)}
                                </p>
                                
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{new Date(article.createdAt).toLocaleDateString('id-ID')}</span>
                                </div>
                                
                                <div className="flex gap-3">
                                    <Link
                                        to={`/dashboard/articles/edit/${article._id}`}
                                        className="flex items-center px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                                    >
                                        <Edit className="w-4 h-4 mr-1" />
                                        Edit
                                    </Link>
                                    
                                    <button
                                        onClick={() => confirmDelete(article._id)}
                                        className="flex items-center px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
                                    >
                                        <Trash2 className="w-4 h-4 mr-1" />
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center">
                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                    currentPage === index + 1
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 m-4 max-w-md w-full">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trash2 className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Konfirmasi Hapus</h3>
                            <p className="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan.</p>
                            
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                                >
                                    Ya, Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleList;
