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
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Origin:
      typeof window !== "undefined"
        ? window.location.origin
        : "https://yatriyatra.com",
  },
  timeout: 30000,
});

// Retry logic helper
const retryRequest = async (
  error: AxiosError,
  retryCount: number = 0
): Promise<any> => {
  const shouldRetry =
    retryCount < MAX_RETRIES &&
    (!error.response ||
      error.response.status >= 500 ||
      error.message === "Network Error");

  if (shouldRetry) {
    const delay = RETRY_DELAY * Math.pow(2, retryCount);
    await new Promise((resolve) => setTimeout(resolve, delay));
    const config = error.config as InternalAxiosRequestConfig;
    return api(config).catch((err) => retryRequest(err, retryCount + 1));
  }

  return Promise.reject(error);
};

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

    // Add request ID for tracking
    config.headers["X-Request-ID"] = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

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
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }

    // If it's a server error (500), retry the request
    if (error.response?.status === 500) {
      return retryRequest(error);
    }

    // If it's a CORS error or network error, retry with backoff
    if (!error.response || error.message === "Network Error") {
      return retryRequest(error);
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
