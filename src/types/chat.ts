export type ChatUser = {
  _id: string;
  chatId: string;
  chatName: string;
  userId: string;
  createdAt: Date;
  latestSender: string;
  latestMessage: string;
  latestMessageAt: Date;
  muted: boolean;
};
