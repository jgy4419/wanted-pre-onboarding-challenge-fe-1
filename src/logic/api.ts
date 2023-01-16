import axios, { AxiosInstance, AxiosRequestConfig, AxiosHeaders } from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const config: AxiosRequestConfig = {
    baseURL,
    headers: {
        ContentType: 'application/json'
    }
};

export const api: AxiosInstance = axios.create(config);

api.interceptors.request.use(
    function (config) {
        // const accessToken = localStorage.getItem('token');
        // if (config.headers && accessToken) {
        //     config.headers["Authorization"] = "login " + accessToken;
        // }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);