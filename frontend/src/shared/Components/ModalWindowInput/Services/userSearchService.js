import axios from 'axios';
import config from '../../../config.js';

export const searchUsers = async (query) => {
    if (!query || query.trim() === "") return [];

    try {
        const response = await axios.get(`${config.API_BASE_BACKEND}/api/user/search?query=${encodeURIComponent(query)}`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error("Search error:", error);
        return [];
    }
};
