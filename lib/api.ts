import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    // ...
  }
});

api.defaults.headers.common['Authorization'] = 'Bearer ' + '';
export default api;