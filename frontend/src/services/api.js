import axios from 'axios';
// An HTTP client to do requests to the backend API

const api = axios.create({
    baseURL: 'http://localhost:3333', // The base URL to all requests for the backends
})

export default api;