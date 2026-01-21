import React from "react";

import { useAuth } from "./context/AuthContext";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";

import "./App.css";

export const App: React.FC = () => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Chat /> : <Login />;
};
