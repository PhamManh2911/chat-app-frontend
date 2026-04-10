import React, { useEffect } from "react";

import { getListChat } from "../../api/chat";
import type { ChatUser } from "../../types/chat";

export const ChatList: React.FC = () => {
  const [listChats, setListChats] = React.useState<Array<ChatUser>>([]);
  const [hasMore, setHasMore] = React.useState<boolean>(false);

  useEffect(() => {
    const fetchChats = async (hasMore: boolean) => {
      const cursor = hasMore
        ? listChats[listChats.length - 1].latestMessageAt
        : null;
      const data = await getListChat(cursor);
      setListChats(data.data);
      setHasMore(data.hasMore);
    };

    fetchChats(hasMore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore]);

  return (
    <ul>
      {listChats.map((c) => (
        <li key={c._id}>{c.chatName}</li>
      ))}
    </ul>
  );
};
