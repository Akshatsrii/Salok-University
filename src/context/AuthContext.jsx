import { createContext, useState, useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ─── Context ────────────────────────────────────────────────────────────────

const AuthContext = createContext(null);

// ─── Hook ───────────────────────────────────────────────────────────────────

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return context;
};

// ─── Provider ───────────────────────────────────────────────────────────────

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // Restore user session on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      } catch {
        console.warn("Failed to restore session. Clearing storage.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = useCallback(
    (data, redirectTo = "/") => {
      if (!data?.token) {
        throw new Error("Login failed: no token provided.");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setToken(data.token);
      setUser(data.user);
      navigate(redirectTo);
    },
    [navigate]
  );

  const logout = useCallback(
    (redirectTo = "/login") => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setToken(null);
      setUser(null);
      navigate(redirectTo);
    },
    [navigate]
  );

  const isAuthenticated = Boolean(token && user);

  const value = {
    user,
    token,
    loading,
    isAuthenticated,
    login,
    logout,
  };

  // Don't render children until session is restored
  if (loading) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;