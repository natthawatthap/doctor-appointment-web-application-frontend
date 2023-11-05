import axios from 'axios';

import { BASE_URL } from '../config';

export const signIn = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/signin`, {
            email,
            password
        });
        // Successful sign-in
        const { token } = response.data;

        // Save the JWT token to local storage
        localStorage.setItem('token', token);

        return response.data;
    } catch (error) {
        // Handle authentication error or network error
        throw error;
    }
};
