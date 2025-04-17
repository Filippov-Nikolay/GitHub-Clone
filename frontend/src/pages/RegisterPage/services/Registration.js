import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('https://localhost:7044/api/User', userData);

        return true; 
    } catch (error) {
        console.error('Error registering user:', error);
        return false;
    }
}
