import { baseApi } from "../api/baseApi";

const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
    }),
    applyJob: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
    }),
    getJobs: builder.query({
      query: (data) => ({
        url: "/jobs",
        // method: "POST",
        // body: data,
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
        // method: "POST",
        // body: data,
      }),
    }),
  }),
});

export const {
  useApplyJobMutation,
  usePostJobMutation,
  useGetJobsQuery,
  useGetJobByIdQuery,
} = jobApi;
