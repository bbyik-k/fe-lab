import axios from 'axios';

const FETCH_URL = 'https://68760973814c0dfa653a55c2.mockapi.io/api/v1';

const AxiosInstance = axios.create({
  baseURL: FETCH_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
