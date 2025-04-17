import axios from 'axios';

export const Login = async ({ formData }) => {
    try {
        const response = await axios.post('https://localhost:7044/api/User/login', {
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