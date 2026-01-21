import { Button, Flex } from "antd";
import React from "react";

import { loginWithGoogle } from "../api/auth";

export const Login: React.FC = () => (
  <Flex justify="center" align="center" style={{ height: "100vh" }}>
    <Button type="primary" onClick={loginWithGoogle}>
      Login with Google
    </Button>
  </Flex>
);
