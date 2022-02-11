import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from 'data/chat';

const initUser = users[0];

const authSlice = createSlice({
  name: 'auth',
  initialState: initUser,
  reducers: {
    login: (state, action: PayloadAction<{ userName: string; avatarURL?: string }>) => {
      const {
        payload: { userName, avatarURL },
      } = action;

      state = { userId: 3, userName, avatarURL: avatarURL ? avatarURL : initUser.avatarURL };
    },
  },
});

export default authSlice.reducer;
