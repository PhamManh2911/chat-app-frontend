import { createContext, useContext, useEffect, useState } from "react";

import { getMe } from "../api/auth";
import type { User } from "../types/auth";
import { tokenStorage } from "../utils/token";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!tokenStorage.getAccessToken()) {
        return;
      }
      setLoading(true);
      const user = await getMe();

      setUser(user);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const logout = () => {
    tokenStorage.clearAll();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
