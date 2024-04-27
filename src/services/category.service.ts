import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

// This service is responsible for fetching data from the API
export const getCategories = async () => {
    return axios.get(`${API_URL}/products/categories`);
};

export const getProductsByCategory = async (category: string) => {
    return axios.get(`${API_URL}/products/category/${category}`);
};
