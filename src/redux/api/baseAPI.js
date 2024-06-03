import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-mu-lake.vercel.app",
  }),
  endpoints: () => ({}),
});
