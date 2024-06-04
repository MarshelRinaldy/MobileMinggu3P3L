import axios from 'axios';

import { BASE_URL, API_KEY } from '@env';

const satellite = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default satellite;
