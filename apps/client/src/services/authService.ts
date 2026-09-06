import api from './api';

export const authService = {
  login: async (credentials: any) => {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
  },
  mfaVerify: async (code: string) => {
    const response = await api.post('/api/auth/mfa/verify', { code });
    return response.data;
  },
  forgotPassword: async (email: string) => {
    const response = await api.post('/api/auth/forgot-password', { email });
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/api/auth/logout');
    return response.data;
  }
};
