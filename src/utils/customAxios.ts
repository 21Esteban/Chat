import axios from 'axios';

const customAxios = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default customAxios;