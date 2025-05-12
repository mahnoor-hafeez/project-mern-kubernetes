import axios from 'axios';
import { Product, Order } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product API
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await api.get(`/products/category/${category}`);
  return response.data;
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await api.get(`/products/search?q=${query}`);
  return response.data;
};

// Order API
export const createOrder = async (order: Omit<Order, '_id' | 'createdAt'>): Promise<Order> => {
  const response = await api.post('/orders', order);
  return response.data;
};

export const getOrderById = async (id: string): Promise<Order> => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

export default api;