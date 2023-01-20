import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(!token) return config;

    config.headers = {
        'Content-type': 'application/json',
        Authorization: token
    };
    return config;
});

export default api;