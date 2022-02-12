import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
  userId: number | null;
  userName: string | null;
  avatarURL: string;
}

const initAuth: Auth = {
  userId: null,
  userName: null,
  avatarURL: `${process.env.REACT_APP_ASSET_PATH}/defaultUserImg.png`,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuth,
  reducers: {
    login: (state, action: PayloadAction<{ userName: string; avatarURL?: string }>) => {
      const {
        payload: { userName, avatarURL },
      } = action;
      state.userId = 3;
      state.userName = userName;
      state.avatarURL = avatarURL ? avatarURL : initAuth.avatarURL;
    },
    logout: () => {
      return initAuth;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
