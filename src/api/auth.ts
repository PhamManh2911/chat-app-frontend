import configs from "../configs";
import type { User } from "../types/auth";

import { axiosInstance } from "./axios";

export async function loginWithGoogle() {
  const redirectUrl =
    window.location.pathname + window.location.search + window.location.hash;
  const state = encodeURIComponent(JSON.stringify({ redirectUrl }));

  window.location.href = `${configs.authConfig.authApiURL}/auth/google?state=${state}`;
}

export async function logout() {
  const response = await axiosInstance.post(
    `${configs.authConfig.authApiURL}/auth/logout`,
  );

  return response.data;
}

export async function getMe() {
  const response = await axiosInstance.get<User>(
    `${configs.authConfig.authApiURL}/auth/me`,
  );

  return response.data;
}

export async function refreshToken() {
  const response = await axiosInstance.post(
    `${configs.authConfig.authApiURL}/auth/refresh`,
  );

  return response.data;
}

export async function getListUsers(searchTerm: string) {
  const response = await axiosInstance.get<{
    data: Array<User>;
    hasMore: boolean;
  }>(
    `${configs.authConfig.authApiURL}/organizations/users${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ""}`,
  );

  return response.data;
}
