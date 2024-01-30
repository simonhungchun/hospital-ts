import axios from "axios";

const request = axios.create({
  baseURL: "http://47.95.13.131:8080",
  timeout: 3000,
});

request.interceptors.request.use((config) => {
  return config;
});
request.interceptors.response.use((response) => {
  return response;
});

export default request;
