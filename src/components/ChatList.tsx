import React from "react";

export const ChatList: React.FC = () => {
  const chats = [
    { id: "1", name: "General" },
    { id: "2", name: "Support" },
  ];

  return (
    <ul>
      {chats.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
};
