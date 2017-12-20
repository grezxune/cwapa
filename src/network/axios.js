import axios from 'axios';

const customAxios = axios.create({
    baseURL: process.env.CW_API_URL,
    withCredentials: true
});

export default customAxios;