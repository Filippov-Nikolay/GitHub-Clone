import axios from 'axios';

export const fetchUsers = async () => {
    try {
        return await axios.get('https://localhost:7044/api/User');
    }
    catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}