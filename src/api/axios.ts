import axios from "axios";
import { getToken, removeToken } from "@/utils/token";
import { navigateTo } from "@/routes/navigation";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      removeToken();
      navigateTo("/");
    }

    console.error("API Error:", error);

    return Promise.reject(error);
  }
);

export default api;