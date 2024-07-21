import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export default axios.create({
  baseURL: baseURL,
});

export const axiosPrivate = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
