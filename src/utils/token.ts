const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

export const tokenStorage = {
  getAccessToken(): string | null {
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
  },
  setAccessToken(token: string) {
    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  clearAccessToken() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  },

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  setRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  },
  clearRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  clearAll() {
    this.clearAccessToken();
    this.clearRefreshToken();
  },
};
