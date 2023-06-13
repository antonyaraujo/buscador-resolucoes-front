import axios from 'axios';

const api = axios.create({
  baseURL:
    '',
  withCredentials: false,
  method: 'get',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
  },
});

export default api;