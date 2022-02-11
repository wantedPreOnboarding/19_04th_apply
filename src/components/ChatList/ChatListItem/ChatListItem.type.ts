export default interface ChatListItemProps {
  item: {
    user: {
      auth: boolean;
      userId: number;
      userName: string;
      avatarURL: string;
    };
    id: number;
    createAt: number;
    userId: number;
    message: string;
  };
}
