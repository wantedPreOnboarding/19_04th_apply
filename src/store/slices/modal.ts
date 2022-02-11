import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
  },
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = true;
    },
    setIsClose: (state, action: PayloadAction<boolean>) => {
      state.isOpen = false;
    },
  },
});

export const { setIsOpen, setIsClose } = modalSlice.actions;

export default modalSlice.reducer;
