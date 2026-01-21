import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { OAuthCallback } from "./pages/OAuthCallback";

export const router = createBrowserRouter([
  {
    path: "/auth/callback",
    element: <OAuthCallback />,
  },
  { path: "*", element: <App /> },
]);
