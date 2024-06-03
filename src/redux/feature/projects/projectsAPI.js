import { baseApi } from "../../api/baseAPI";


const projectsAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProjects: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
    }),
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
    getSingleProjects: builder.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProjectsMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectsQuery,
} = projectsAPI;
