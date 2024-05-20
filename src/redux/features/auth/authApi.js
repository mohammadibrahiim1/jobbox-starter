import { baseApi } from "../api/baseApi";
import { getUser } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerTeacher: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/login",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res);
          await dispatch(getUser(data.email));
        } catch (error) {
          // console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterTeacherMutation } = authApi;
