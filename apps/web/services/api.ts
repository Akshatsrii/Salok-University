import axios from 'axios';

// Create a centralized axios instance
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1',
  withCredentials: true, // Important for sending/receiving cookies!
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Interceptors for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // We can handle global 401s here if needed
    return Promise.reject(error);
  }
);
