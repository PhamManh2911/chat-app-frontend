import axios from "axios";

import configs from "../configs";
import { tokenStorage } from "../utils/token";

export const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// Handle 401 errors and refresh token logic
let isRefreshing = false;
let requestQueue: ((token: string) => void)[] = [];

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        const refreshToken = tokenStorage.getRefreshToken();
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        try {
          const { data } = await axios.post(
            `${configs.authConfig.authApiURL}/auth/refresh`,
            { refreshToken }
          );

          tokenStorage.setAccessToken(data.accessToken);
          isRefreshing = false;

          requestQueue.forEach((cb) => cb(data.accessToken));
          requestQueue = [];

          original.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosInstance(original);
        } catch (error) {
          console.error("Refresh token failed", error);
          tokenStorage.clearAll();
          window.location.href = "/";
          return Promise.reject(error);
        }
      }

      return new Promise((resolve) => {
        requestQueue.push((token: string) => {
          original.headers.Authorization = `Bearer ${token}`;
          resolve(axiosInstance(original));
        });
      });
    }

    return Promise.reject(error);
  }
);
