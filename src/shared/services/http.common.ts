import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const APIClient = axios.create({
  baseURL: "https://api-placeholder.herokuapp.com",
  headers: {
    "Content-Type": "application/json"
  }
});

// Add a request interceptor
APIClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
APIClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default APIClient;
