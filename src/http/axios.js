import axios from "axios";

const baseURL = "http://localhost:5000/v1/api";
const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const get = (url, config) => axiosInstance.get(url, config);
const post = (url, data, config) => axiosInstance.post(url, data, config);
const put = (url, data, config) => axiosInstance.put(url, data, config);
const del = (url, data, config) => axiosInstance.delete(url, data, config);

export { axiosInstance, get, post, put, del };
