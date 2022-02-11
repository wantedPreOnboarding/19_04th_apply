import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
  },
  reducers: {
    setisOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setisOpen } = modalSlice.actions;

export default modalSlice.reducer;
