import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    id: 1,
    message: 'message',
  },
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = !state.isOpen;
    },
    delModalNum: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    modalMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setIsOpen, delModalNum, modalMessage } = modalSlice.actions;

export default modalSlice.reducer;
