import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth';
import asserSlice from './slice/assets';

const store = configureStore({
  reducer: {
    auth: authSlice,
    assets: asserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
