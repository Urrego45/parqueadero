import axios from "axios";

// console.log(import.meta.env.VITE_ROUTE_BACKEND);

const instance = axios.create({
  baseURL: import.meta.env.VITE_ROUTE_BACKEND,
  withCredentials: true,
});

export default instance;