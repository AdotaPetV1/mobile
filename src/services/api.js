import axios from 'axios';

const api = axios.create({
    baseURL: 'https://adota-pet-backend.herokuapp.com/api'
});

export default api;