import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { authService } from "./authService";

const API_BASE_URL = "/api/v1";

// Create a custom axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // Add CORS settings
  withCredentials: true,
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
    // Handle common errors like 401, 403, etc.
    if (error.response?.status === 401) {
      // Clear invalid token
      authService.clearTokens();

      // You might redirect to login page here
      // or show a login modal
    }

    // Handle CORS errors
    if (error.message === "Network Error") {
      console.error("A network error occurred. This could be a CORS issue.");
      // Log more details about the error
      console.error("Error details:", {
        message: error.message,
        response: error.response,
        request: {
          headers: error.config?.headers,
          url: error.config?.url,
          method: error.config?.method,
        },
      });
    }

    return Promise.reject(error);
  }
);

// Initialize auth from URL if needed (for development/testing)
if (typeof window !== "undefined") {
  // Only run in browser context
  authService.initializeFromUrl();
}

export default api;
