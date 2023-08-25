import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
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
        url: `/job-details/${id}`,
        // method: "POST",
        // body: data,
      }),
    }),
  }),
});

export const { usePostJobMutation, useGetJobsQuery, useGetJobByIdQuery } = jobApi;
