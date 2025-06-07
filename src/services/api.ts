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
  // Add timeout
  timeout: 10000,
  // Remove withCredentials
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

    // Log request in development
    if (isDevelopment) {
      console.log("API Request:", {
        url: config.url,
        method: config.method,
        headers: config.headers,
        params: config.params,
      });
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
  (response: AxiosResponse) => {
    // Log successful response in development
    if (isDevelopment) {
      console.log("API Response:", {
        url: response.config.url,
        status: response.status,
        data: response.data,
      });
    }
    return response;
  },
  async (error: AxiosError) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      authService.clearTokens();
    }

    // Log detailed error information
    const errorDetails = {
      message: error.message,
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      statusText: error.response?.statusText,
      headers: error.config?.headers,
      responseData: error.response?.data,
    };

    console.error("API Error:", errorDetails);

    // If it's a server error (500), add custom message
    if (error.response?.status === 500) {
      const customError = new Error(
        "The server encountered an error. Please try again later."
      );
      (customError as any).originalError = error;
      (customError as any).details = errorDetails;
      return Promise.reject(customError);
    }

    return Promise.reject(error);
  }
);

// Initialize auth from URL if needed
if (typeof window !== "undefined") {
  authService.initializeFromUrl();
}

export default api;
