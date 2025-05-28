import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export interface Article {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export const adminLogin = async (credentials: LoginData): Promise<LoginResponse> => {
  const url = `${API_BASE_URL}/admin/login`;
  console.log('API Login URL:', url);
  const response = await axios.post(url, credentials);
  return response.data;
};

export const createArticle = async (formData: FormData, token: string): Promise<Article> => {
  const response = await axios.post(`${API_BASE_URL}/articles`, formData, {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
  return response.data;
};

export const updateArticle = async (id: string, article: FormData, token: string): Promise<Article> => {
  const response = await axios.put(`${API_BASE_URL}/articles/${id}`, article, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
};

export const deleteArticle = async (id: string, token: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/articles/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get(`${API_BASE_URL}/articles`);
  return response.data;
};
