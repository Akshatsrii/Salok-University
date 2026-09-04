import { create } from 'zustand';
import { api } from '../services/api';

interface User {
  id: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // true by default until we check session
  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch (e) {
      console.error('Logout error', e);
    } finally {
      set({ user: null, isAuthenticated: false });
      window.location.href = '/login';
    }
  },
}));
