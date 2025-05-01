import axios from 'axios';
import config from '../../../shared/config';

export const ApiService = async ({ formData }) => {
   try {
       const response = await axios.post(`${config.API_BASE_BACKEND}/api/User/login`, {
            Username: formData.userNameOrEmail,
            Password: formData.password
        }, 
        {
            withCredentials: true
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}