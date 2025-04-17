import axios from 'axios';

const API_BASE_URL = 'https://localhost:7044/api/edit';

export const getProfile = () => {
    return axios.get(`${API_BASE_URL}/getProfile`, {
        withCredentials: true
    });
};

export const saveProfile = (profileData) => {
    return axios.post(`${API_BASE_URL}/saveProfile`, profileData, {
        withCredentials: true
    });
};
