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
        userId: 1,
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
  },
});

export const { writeMessage, deleteMessage, replymessage } = chatSlice.actions;

export default chatSlice.reducer;
