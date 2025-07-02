import axios from 'axios';
import config from '../../../../shared/config';

export const getFollowers = (username) => {
  return axios.get(`${config.API_BASE_BACKEND}/api/subscription/followers/${username}`, {
    withCredentials: true
  });
};

export const getFollowing = (username) => {
  return axios.get(`${config.API_BASE_BACKEND}/api/subscription/following/${username}`, {
    withCredentials: true
  });
};



export const subscribeToUser = (followedId) => {
  return axios.post(`${config.API_BASE_BACKEND}/api/subscription/subscribe/${followedId}`, {}, {
    withCredentials: true
  });
};

export const unsubscribeFromUser = (followedId) => {
  return axios.delete(`${config.API_BASE_BACKEND}/api/subscription/unsubscribe/${followedId}`, {
    withCredentials: true
  });
};


