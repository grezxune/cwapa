import axios from 'axios';

console.log('Custom Axios - CW_API_URL: ', process.env.CW_API_URL);

const customAxios = axios.create({
    baseURL: process.env.CW_API_URL,
    withCredentials: true
});

export default customAxios;