import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loginUserId: 1,
    userName: '임수',
    avatarURL: 'assets/images/defaultUserImg.png',
  },
  reducers: {},
});

export default authSlice.reducer;
