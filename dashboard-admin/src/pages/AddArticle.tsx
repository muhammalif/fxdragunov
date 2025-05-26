
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createArticle, getArticles } from "../api/api";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, Type } from 'lucide-react';

const AddArticle = () => {
    const [existingTitles, setExistingTitles] = useState([]);
    const [selectedFileName, setSelectedFileName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await getArticles();
                setExistingTitles(response.map(article => article.title.toLowerCase()));
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Judul harus diisi')
            .test('unique-title', 'Judul sudah ada', value =>
                !existingTitles.includes(value?.toLowerCase())
            ),
        content: Yup.string().required('Konten harus diisi'),
        imageFile: Yup.mixed().required('Gambar harus dipilih'),
    });

    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("Token tidak ditemukan, coba login kembali.");
            }

            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('content', data.content);
            formData.append('image', data.imageFile[0]);

            await createArticle(formData, token);
            toast.success('Berhasil membuat artikel!');
            setTimeout(() => {
                navigate('/dashboard/articles');
            }, 1500);
        } catch (err) {
            console.error(err);
            toast.error('Gagal membuat artikel.');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(file.type)) {
                toast.error('Hanya file format JPEG, JPG, PNG, GIF yang diizinkan.');
            } else {
                setValue('imageFile', e.target.files);
                setSelectedFileName(file.name);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                    <button
                        onClick={() => navigate('/dashboard/articles')}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Tambah Artikel Baru</h1>
                        <p className="text-gray-600">Buat artikel baru untuk website Anda</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                    <div>
                        <label className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                            <Type className="w-5 h-5 mr-2" />
                            Judul Artikel
                        </label>
                        <input 
                            type="text" 
                            {...register('title')}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            placeholder="Masukkan judul artikel yang menarik..."
                        />
                        {errors.title && (
                            <p className="text-red-500 text-sm mt-2 flex items-center">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                            <FileText className="w-5 h-5 mr-2" />
                            Konten Artikel
                        </label>
                        <textarea 
                            {...register('content')}
                            rows={8}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                            placeholder="Tulis konten artikel Anda di sini..."
                        />
                        {errors.content && (
                            <p className="text-red-500 text-sm mt-2 flex items-center">
                                {errors.content.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                            <Upload className="w-5 h-5 mr-2" />
                            Gambar Artikel
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-colors duration-200">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                            {selectedFileName && (
                                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-700 text-sm font-medium">
                                        ✓ File dipilih: {selectedFileName}
                                    </p>
                                </div>
                            )}
                        </div>
                        {errors.imageFile && (
                            <p className="text-red-500 text-sm mt-2 flex items-center">
                                {errors.imageFile.message}
                            </p>
                        )}
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => navigate('/dashboard/articles')}
                                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Menyimpan...
                                    </div>
                                ) : (
                                    'Buat Artikel'
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArticle;
