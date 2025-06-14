export const API_BASE_URL = "https://api.yatriyatra.com/api/v1";

// Helper function to build API URLs
export const buildApiUrl = (endpoint: string) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};
