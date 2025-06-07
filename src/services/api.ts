import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { authService } from "./authService";

const isDevelopment = process.env.NODE_ENV === "development";
const API_BASE_URL = isDevelopment
  ? "/api/v1" // This will be proxied through Next.js in development
  : "https://api.yatriyatra.com/api/v1"; // Direct API call in production

// Create a custom axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // Remove withCredentials as it can cause CORS preflight issues
  withCredentials: false,
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Get token from auth service
    const token = authService.getAccessToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add timestamp to prevent caching issues
    if (config.method?.toLowerCase() === "get") {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      authService.clearTokens();
    }

    // Handle CORS errors with more detailed logging
    if (error.message === "Network Error") {
      console.error("CORS Error Details:", {
        url: error.config?.url,
        method: error.config?.method,
        headers: error.config?.headers,
        status: error.response?.status,
        statusText: error.response?.statusText,
      });
    }

    return Promise.reject(error);
  }
);

// Initialize auth from URL if needed
if (typeof window !== "undefined") {
  authService.initializeFromUrl();
}

export default api;
