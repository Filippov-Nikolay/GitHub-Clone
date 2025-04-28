import axios from 'axios';
import config from '../../../shared/config';


export const getProfile = () => {
    return axios.get(`${config.API_BASE_BACKEND}/api/edit/getProfile`, {
        withCredentials: true
    });
};

export const saveProfile = (profileData) => {
    return axios.post(`${config.API_BASE_BACKEND}/api/edit/saveProfile`, profileData, {
        withCredentials: true
    });
};

export const getProfileByName = (username) => {
    return axios.get(`${config.API_BASE_BACKEND}/api/edit/getProfileByName/${username}`, {
        withCredentials: true
    });
};
