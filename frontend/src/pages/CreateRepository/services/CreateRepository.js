import axios from 'axios';
import config from '../../../shared/config';



export const createRepository = (formData) => {
    console.log("creating a new repository");
    return axios.post(`${config.API_BASE_BACKEND}/api/Repository/createRepository`,
        {
            name: formData.name,
            description: formData.description,
            isPrivate: formData.isPrivate,
            isPinned: formData.isPinned || false
        },
         {
        withCredentials: true
    });
};

export const editRepository = (profileData) => {
    return axios.post(`${config.API_BASE_BACKEND}/api/Repository/editRepository`, profileData, {
        withCredentials: true
    });
};

export const getProfileByName = (username) => {
    return axios.get(`${config.API_BASE_BACKEND}/api/Repository/deleteRepository${username}`, {
        withCredentials: true
    });
};
