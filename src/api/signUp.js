import axios from 'axios';
import { BASE_URL } from '../config';

export const signUp = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
            email,
            password
        });

        return response.data; 
    } catch (error) {
        throw error; 
    }
};