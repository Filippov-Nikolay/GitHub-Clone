import axios from 'axios';
import config from '../../../shared/config';

export const PasswordReset = async ({ formData }) => {
    try {
        const response = await axios.post(`${config}/api/User/forgot-password`, {
            Email: formData.email
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}