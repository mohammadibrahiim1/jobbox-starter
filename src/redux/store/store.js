import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { baseApi } from "../features/api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
