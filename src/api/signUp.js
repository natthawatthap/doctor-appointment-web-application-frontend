import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Base URL for your API

export const signUp = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
            email,
            password
        });

        return response.data; // Return the response data
    } catch (error) {
        throw error; // Throw error in case of any issues
    }
};