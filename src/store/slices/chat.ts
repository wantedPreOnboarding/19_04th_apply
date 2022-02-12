import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users, messages } from 'data/chat';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatList: {
      id: 1,
      title: 'SweetLover',
      users,
      messages,
    },
    reply: {
      userName: '',
      message: '',
    },
  },
  reducers: {
    writeMessage: (state, action: PayloadAction<{ id: number; message: string }>) => {
      const { id, message } = action.payload;
      state.chatList.messages.push({
        id,
        createAt: Date.now(),
        userId: 3,
        message,
      });
    },

    deleteMessage: (state, action: PayloadAction<number>) => {
      state.chatList.messages = state.chatList.messages.filter(({ id }) => id !== action.payload);
    },

    replymessage: (state, action: PayloadAction<{ userName: string; message: string }>) => {
      const { userName, message } = action.payload;
      state.reply = { userName, message };
    },

    changeUserInfo: (state, action: PayloadAction<{ userName: string; avatarURL?: string }>) => {
      const {
        payload: { userName, avatarURL },
      } = action;
      state.chatList.users[2].userName = userName;
      state.chatList.users[2].avatarURL = avatarURL ? avatarURL : state.chatList.users[2].avatarURL;
    },
  },
});

export const { writeMessage, deleteMessage, replymessage, changeUserInfo } = chatSlice.actions;

export default chatSlice.reducer;
