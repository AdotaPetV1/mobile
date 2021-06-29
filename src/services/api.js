import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://localhost:8082/api'
});

export default api;