import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

// This service is responsible for fetching data from the API
export const getProductsCuantity = async (cuantity: number) => {
    return axios.get(`${API_URL}/products?limit=${cuantity}`);
};

// This service is responsible for fetching data from the API
export const getProducts = async () => {
    return axios.get(`${API_URL}/products`);
};

// This service is responsible for fetching data from the API
export const getProductById = async (id: number) => {
    return axios.get(`${API_URL}/products/${id}`);
};
