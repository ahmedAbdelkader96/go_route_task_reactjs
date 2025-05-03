import axios from "axios";

// Base configuration for API clients

const defaultHeaders = {
  "Content-Type": "application/json",
};
 
// Public API client (no interceptors)
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders,
});

// Secured API client (with interceptors)
export const securedApiClient = axios.create({
  baseURL: BASE_URL,
  headers: defaultHeaders,
});

// Add a request interceptor to dynamically set the Authorization header for secured APIs
securedApiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken"); // Retrieve token from localStorage or another secure storage
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally for secured APIs
securedApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      localStorage.removeItem("accessToken"); // Clear token
      localStorage.removeItem("refreshToken"); // Clear refresh token
      window.location.href = "/auth"; // Redirect to login page
    } else if (status === 403) {
      console.error("Forbidden! You do not have access to this resource.");
    } else if (status >= 500) {
      console.error("Server error! Please try again later.");
    }

    return Promise.reject(error);
  }
);