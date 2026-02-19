import { apiRequest } from "./api";

// --- Types ---
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
}

export interface AuthUser {
  id: string | number;
  email: string;
  name: string;
  role?: string;
  [key: string]: unknown;
}

export interface AuthResponse {
  user: AuthUser;
  tokens: AuthTokens;
}

// --- Token Management ---
const TOKEN_KEY = "auth_access_token";
const REFRESH_TOKEN_KEY = "auth_refresh_token";

export const TokenManager = {
  getAccessToken: (): string | null =>
    localStorage.getItem(TOKEN_KEY),

  getRefreshToken: (): string | null =>
    localStorage.getItem(REFRESH_TOKEN_KEY),

  setTokens: ({ accessToken, refreshToken }: AuthTokens): void => {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  clearTokens: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  isAuthenticated: (): boolean =>
    !!localStorage.getItem(TOKEN_KEY),
};

// --- Validation ---
const validateLoginCredentials = (data: LoginCredentials): void => {
  if (!data?.email || !data?.password) {
    throw new Error("Email and password are required.");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format.");
  }
  if (data.password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }
};

// --- Auth API ---

/**
 * Log in a user and persist tokens on success.
 * @example loginUser({ email: "user@example.com", password: "secret123" })
 */
export const loginUser = async (
  data: LoginCredentials
): Promise<AuthResponse> => {
  validateLoginCredentials(data);

  const response = await apiRequest<AuthResponse>("/auth/login", "POST", {
    email: data.email.trim().toLowerCase(),
    password: data.password,
    rememberMe: data.rememberMe ?? false,
  });

  TokenManager.setTokens(response.tokens);
  return response;
};

/**
 * Register a new user.
 */
export const registerUser = async (
  data: LoginCredentials & { name: string }
): Promise<AuthResponse> => {
  if (!data?.name?.trim()) throw new Error("Name is required.");
  validateLoginCredentials(data);

  const response = await apiRequest<AuthResponse>("/auth/register", "POST", {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    password: data.password,
  });

  TokenManager.setTokens(response.tokens);
  return response;
};

/**
 * Refresh the access token using the stored refresh token.
 */
export const refreshAccessToken = async (): Promise<AuthTokens> => {
  const refreshToken = TokenManager.getRefreshToken();
  if (!refreshToken) throw new Error("No refresh token found. Please log in.");

  const tokens = await apiRequest<AuthTokens>("/auth/refresh", "POST", {
    refreshToken,
  });

  TokenManager.setTokens(tokens);
  return tokens;
};

/**
 * Log out the current user and clear all tokens.
 */
export const logoutUser = async (): Promise<void> => {
  const refreshToken = TokenManager.getRefreshToken();

  try {
    if (refreshToken) {
      await apiRequest("/auth/logout", "POST", { refreshToken });
    }
  } finally {
    // Always clear tokens locally even if the server call fails
    TokenManager.clearTokens();
  }
};

/**
 * Fetch the currently authenticated user's profile.
 */
export const getCurrentUser = (): Promise<AuthUser> =>
  apiRequest<AuthUser>("/auth/me");

/**
 * Send a password reset email.
 */
export const requestPasswordReset = (email: string): Promise<void> => {
  if (!email?.trim()) throw new Error("Email is required.");
  return apiRequest("/auth/forgot-password", "POST", {
    email: email.trim().toLowerCase(),
  });
};

/**
 * Reset password using a token from the reset email.
 */
export const resetPassword = (
  token: string,
  newPassword: string
): Promise<void> => {
  if (!token || !newPassword) throw new Error("Token and new password are required.");
  if (newPassword.length < 8) throw new Error("Password must be at least 8 characters.");
  return apiRequest("/auth/reset-password", "POST", { token, newPassword });
};

/**
 * Change the password for the currently authenticated user.
 */
export const changePassword = (
  currentPassword: string,
  newPassword: string
): Promise<void> => {
  if (!currentPassword || !newPassword) throw new Error("Both passwords are required.");
  if (newPassword.length < 8) throw new Error("New password must be at least 8 characters.");
  if (currentPassword === newPassword) throw new Error("New password must differ from current.");
  return apiRequest("/auth/change-password", "POST", { currentPassword, newPassword });
};