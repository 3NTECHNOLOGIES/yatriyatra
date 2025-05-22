// Token storage keys
const ACCESS_TOKEN_KEY = "accessToken";

// Auth service for token management
export const authService = {
  // Store access token
  setAccessToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
  },

  // Get access token
  getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(ACCESS_TOKEN_KEY);
    }
    return null;
  },

  // Clear tokens (logout)
  clearTokens(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  },

  // Store token from query params (for dev/testing only)
  initializeFromUrl(): void {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (token) {
        this.setAccessToken(token);

        // Remove token from URL to prevent sharing
        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        window.history.replaceState({}, document.title, url.toString());
      }
    }
  },
};
