import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  console.error('API_BASE_URL is not set in environment variables. Please set VITE_API_BASE_URL in your .env file.');
}

export const fetchArticles = async () => {
  const response = await axios.get(`${API_BASE_URL}/articles`);
  return response.data;
};

export const fetchArticleById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
  return response.data;
};
