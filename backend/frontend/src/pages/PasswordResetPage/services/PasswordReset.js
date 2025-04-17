import axios from 'axios';

export const PasswordReset = async ({ formData }) => {
    try {
        const response = await axios.post('https://localhost:7044/api/User/forgot-password', {
            Email: formData.email
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}