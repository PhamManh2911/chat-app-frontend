import configs from "../configs";
import type { ChatUser } from "../types/chat";

import { axiosInstance } from "./axios";

export async function getListChat(cursor: Date | null) {
  const response = await axiosInstance.get<{
    data: ChatUser[];
    hasMore: boolean;
  }>(
    `${configs.chatConfig.chatApiURL}/chat${cursor ? `?cursor=${cursor.toISOString()}` : ""}`,
  );

  return response.data;
}
