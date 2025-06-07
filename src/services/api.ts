import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { authService } from "./authService";

interface ApiErrorResponse {
  message?: string;
  error?: string;
}

const API_BASE_URL = "https://api.yatriyatra.com/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Origin: "https://yatriyatra.com",
  },
  timeout: 30000,
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = authService.getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add timestamp to prevent caching
    if (config.method?.toLowerCase() === "get") {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ApiErrorResponse>) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      authService.clearTokens();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    // If it's a server error (500), add custom message
    if (error.response?.status === 500) {
      const message =
        error.response.data?.message ||
        "The server encountered an error. Please try again later.";
      return Promise.reject(new Error(message));
    }

    // If it's a CORS error, provide more helpful message
    if (!error.response && error.message === "Network Error") {
      return Promise.reject(
        new Error("Unable to connect to the API. Please try again later.")
      );
    }

    // For other errors, use the server's error message if available
    const message =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";
    return Promise.reject(new Error(message));
  }
);

export default api;
