import axios from 'axios';
import config from '../../../shared/config';

// Создать репозиторий
export const createRepository = (repositoryDTO) => {
  return axios.post(`${config.API_BASE_BACKEND}/api/Repository/createRepository`, repositoryDTO, {
    withCredentials: true,
  });
};

export const deleteRepository = (id) => {
  return axios.delete(`${config.API_BASE_BACKEND}/api/Repository/deleteRepository`, {
    params: { id }, // вот это добавляет ?id=...
    withCredentials: true,
  });
};

// Обновить репозиторий
export const updateRepository = (repositoryDTO) => {
  return axios.put(`${config.API_BASE_BACKEND}/api/Repository/editRepository`, repositoryDTO, {
    withCredentials: true,
  });
};

// Получить репозиторий по ID
export const getRepositoryById = (id) => {
  return axios.get(`${config.API_BASE_BACKEND}/api/Repository/${id}`, {
    withCredentials: true,
  });
};

// Получить репозиторий по имени пользователя и имени репозитория
export const getRepositoryByUserAndName = (username, repoName) => {
  return axios.get(`${config.API_BASE_BACKEND}/api/Repository/getByUserNameAndRepoName/${encodeURIComponent(username)}/${encodeURIComponent(repoName)}`, {
    withCredentials: true,
  });
};


export const toggleVisibility = (id) => {
  console.log('Calling toggleVisibility with API_BASE_BACKEND:', config.API_BASE_BACKEND);
  return axios.post(`${config.API_BASE_BACKEND}/api/Repository/toggleVisibility/${id}`, null, {
    withCredentials: true,
  });
};
