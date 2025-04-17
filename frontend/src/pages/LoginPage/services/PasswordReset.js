import axios from 'axios';

export const PasswordReset = async ({ resetData }) => {
    try {
        console.log("resetData in PasswordReset:", resetData);

        const response = await axios.post('https://localhost:7044/api/User/reset-password', {
            Email: resetData.email,
            NewPassword: resetData.newPassword,
            ConfirmPassword: resetData.confirmPassword,
            Code: resetData.code
        });
        return response.data;
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}