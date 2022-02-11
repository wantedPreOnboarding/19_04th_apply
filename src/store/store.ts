import { configureStore } from '@reduxjs/toolkit';
import { authReducer, chatReducer, modalReducer } from './slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    modal: modalReducer,
  },
});

// RootState type
export type RootState = ReturnType<typeof store.getState>;

// App Dispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
