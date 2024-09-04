import axios from 'axios';

export const login = (username, password) => {
    return axios.post('/api/auth/login', { username, password });
};

export const register = (username, password) => {
    return axios.post('/api/auth/register', { username, password });
};
