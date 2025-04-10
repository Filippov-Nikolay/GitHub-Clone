import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('https://localhost:7044/api/User', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}