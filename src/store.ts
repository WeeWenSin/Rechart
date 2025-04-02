import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./ApiRTK/api";

export const store = configureStore({
  reducer: {// 注册API Reducer
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});//添加API Middleware

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
