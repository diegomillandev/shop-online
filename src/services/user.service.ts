import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

export const loginAdmin = {
    login: async (username: string, password: string) => {
        return axios.post(`${API_URL}/auth/login`, { username, password });
    },
};
