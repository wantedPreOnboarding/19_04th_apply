export default interface ChatListItemProps {
  item: {
    id: number;
    userId: number;
    createAt: number;
    message: string;
    user: {
      id: number;
      auth: boolean;
      userName: string;
      avatarURL: string;
    };
  };
}
