import axios from 'axios';

console.log('Custom Axios - CW_API_URL: ', process.env.CW_API_URL);
console.log('Custom Axios - NODE_ENV: ', process.env.NODE_ENV);
console.log('Custom Axios - env: ', process.env);

const customAxios = axios.create({
    baseURL: process.env.CW_API_URL,
    withCredentials: true
});

export default customAxios;