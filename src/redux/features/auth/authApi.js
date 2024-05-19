import { baseApi } from "../api/baseApi";
import { getUser } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "PUT",
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

export const { useRegisterUserMutation } = authApi;
