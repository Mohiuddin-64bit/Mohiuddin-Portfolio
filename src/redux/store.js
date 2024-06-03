import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseAPI";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,

  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
      },
    }).concat(baseApi.middleware),
});
