import { useEffect } from "react";

import { tokenStorage } from "../utils/token";

export const OAuthCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get("access");
    const refreshToken = params.get("refresh");
    const redirect = params.get("redirect");

    if (accessToken && refreshToken) {
      tokenStorage.setAccessToken(accessToken);
      tokenStorage.setRefreshToken(refreshToken);
      window.location.href =
        window.location.origin +
        (redirect ? decodeURIComponent(redirect) : "/");
    } else {
      console.log("No tokens found in URL");
    }
  }, []);

  return <div>Signing you in...</div>;
};
