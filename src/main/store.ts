import { toastMiddleware } from '@/components/toast/model/middleware';
import toastReducer from '@/components/toast/model/slice';
import { userApi } from '@/models/user';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    toast: toastReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, toastMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;