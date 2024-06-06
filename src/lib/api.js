// src/lib/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

// Add other API calls as needed
