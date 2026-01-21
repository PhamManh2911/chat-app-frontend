import { Button, Flex, Image, Layout, Typography } from "antd";
import React from "react";

import { useAuth } from "../context/AuthContext";

import { ChatList } from "./ChatList";

export const ChatLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Layout style={{ height: "100vh" }}>
    <SideBar />
    <Layout.Content>
      <main style={{ flex: 1 }}>{children}</main>
    </Layout.Content>
  </Layout>
);

const SideBar = () => {
  const { user, logout } = useAuth();

  return (
    <Layout.Sider style={{ padding: "12px" }}>
      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        <ChatList />

        {user && (
          <Flex justify="center" vertical gap={8}>
            <Flex gap="12px" align="center">
              {/* Image Url may be rate limited though still can access directly from browser */}
              <Image
                src={user.avatar}
                alt="Avatar"
                width={32}
                height={32}
                preview={false}
                style={{ borderRadius: "50%" }}
              />
              <Typography style={{ cursor: "pointer" }}>{user.name}</Typography>
            </Flex>
            <Button title="logout" onClick={logout}>
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </Layout.Sider>
  );
};
