import React from "react";

import { ChatWindow } from "../components/ChatWindow";
import { ChatLayout } from "../components/Layout/index";

export const Chat: React.FC = () => (
  <ChatLayout>
    <ChatWindow />
  </ChatLayout>
);
