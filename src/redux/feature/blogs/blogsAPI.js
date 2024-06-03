import { baseApi } from "../../api/baseAPI";


const blogsAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlogs: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
    }),
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
    getSingleBlogs: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateBlogsMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogsQuery,
} = blogsAPI;
