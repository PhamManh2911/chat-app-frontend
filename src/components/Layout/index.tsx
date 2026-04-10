import { Button, Flex, Image, Input, Layout, Typography } from "antd";
import React, { useEffect } from "react";

import { getListUsers } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import type { User } from "../../types/auth";
import { debounceAsync } from "../../utils/debounce";

import { ChatList } from "./ChatList";

export const ChatLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Layout style={{ height: "100vh" }}>
    <Layout.Sider style={{ padding: "12px" }}>
      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        <HeaderSideBar />
        <FooterSideBar />
      </Flex>
    </Layout.Sider>
    <Layout.Content>
      <main style={{ flex: 1 }}>{children}</main>
    </Layout.Content>
  </Layout>
);

const HeaderSideBar = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasMore, setHasMore] = React.useState<boolean>(false);
  const [listUsers, setListUsers] = React.useState<Array<User>>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!searchTerm) return;
      setLoading(true);
      // Simulate API call
      const response = await getListUsers(searchTerm);

      setListUsers((prev) => [...prev, ...response.data]);
      setHasMore(response.hasMore);
      setLoading(false);
    };

    debounceAsync(fetchUsers, 300)();
  }, [searchTerm]);

  return (
    <Flex vertical gap={16}>
      <Input
        placeholder="Search user"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ChatList />
    </Flex>
  );
};

const FooterSideBar = () => {
  const { user, logout } = useAuth();

  return (
    user && (
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
    )
  );
};
