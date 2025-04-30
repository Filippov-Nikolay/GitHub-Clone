import axios from 'axios';
import config from '../../../shared/config';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${config.API_BASE_BACKEND}/api/User`, userData, {
            withCredentials: true // Для отправки куки
        });

        return true; 
    } catch (error) {
        console.error('Error registering user:', error);
        return false;
    }
}
