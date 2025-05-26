import { useEffect, useState } from "react";
import { getArticles, Article } from "../api/api";
import { FileText, TrendingUp, Users, Activity } from "lucide-react";

const Home = () => {
    const [totalArticles, setTotalArticles] = useState(0);
    const [latestArticle, setLatestArticle] = useState<Article | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getArticles();
                setTotalArticles(response.length);

                if (response.length > 0) {
                    const sortedArticles = response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    setLatestArticle(sortedArticles[0]);
                }
            } catch (err) {
                console.error('Failed to fetch articles:', err);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Selamat Datang di Dashboard</h1>
                <p className="text-gray-600">Kelola konten dan pantau aktivitas website Anda</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <FileText className="w-8 h-8" />
                        <span className="text-2xl font-bold">{totalArticles}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Total Artikel</h3>
                    <p className="text-blue-100 text-sm">Artikel yang dipublikasi</p>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <TrendingUp className="w-8 h-8" />
                        <div className="text-right">
                            <div className="text-2xl font-bold">Terbaru</div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Artikel Terbaru</h3>
                    <p className="text-green-100 text-sm truncate">
                        {latestArticle ? latestArticle.title : "Belum ada artikel"}
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <Users className="w-8 h-8" />
                        <span className="text-2xl font-bold">-</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Pengguna Online</h3>
                    <p className="text-purple-100 text-sm">Fitur segera hadir</p>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform duration-200">
                    <div className="flex items-center justify-between mb-4">
                        <Activity className="w-8 h-8" />
                        <span className="text-2xl font-bold">-</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Aktivitas</h3>
                    <p className="text-orange-100 text-sm">Statistik harian</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Statistik Artikel</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Total Publikasi</span>
                            <span className="font-semibold text-gray-800">{totalArticles}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Artikel Bulan Ini</span>
                            <span className="font-semibold text-gray-800">-</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Draft</span>
                            <span className="font-semibold text-gray-800">-</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h3>
                    <div className="space-y-4">
                        {latestArticle ? (
                            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-800">Artikel baru dipublikasi</p>
                                    <p className="text-sm text-gray-600 truncate">{latestArticle.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {new Date(latestArticle.createdAt).toLocaleDateString('id-ID')}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <Activity className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                <p>Belum ada aktivitas</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
