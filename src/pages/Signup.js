import React, { useEffect, useState } from "react";
// import loginImage from "../assets/login.svg";
import { useForm, useWatch } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/features/auth/authSlice";
// import { useRegisterUserMutation } from "../redux/features/auth/authApi";

// import { toast } from "react-hot-toast";
const Signup = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  // const { isError, error } = useSelector((state) => state.auth);
  // const { registerUser } = useRegisterUserMutation();

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
    reset();
    navigate("/register");

    // dispatch(await registerUser({ ...data }));
  };

  return (
    <div className="py-28">
      <div className="text-2xl text-[#A7EABA]">
        Please, write your information!
      </div>
      <div className="hero-content flex-col lg:flex-row justify-between gap-28 mx-auto">
        <div className="text-center lg:text-left">
          <img
            src={"https://i.ibb.co/rv9LmGs/register-img.jpg"}
            className="py-6 w-[650px] h-[650px]"
            alt="register img"
          />
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                name="Full name"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("phone")}
              />
            </div>
            {/* <select
              {...register("userType")}
              className="select select-accent w-full max-w-xs focus:outline-none input input-bordered  border-[#A7EABA]"
            >
              {roleOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select> */}
            {/* <select
              {...register("time")}
              className="select select-accent w-full max-w-xs focus:outline-none input input-bordered  border-[#A7EABA]"
            >
              {timeOptions?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select> */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">class number</span>
              </label>
              <input
                type="number"
                name="password"
                placeholder="class number"
                id="password"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("password")}
              />
            </div> */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">amount</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="class number"
                id="password"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("password")}
              />
            </div> */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("password")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                id="confirmPassword"
                className="input input-bordered focus:outline-none border-[#A7EABA]"
                required
                {...register("confirmPassword")}
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
                <div className="label-text-alt flex gap-1">
                  Already Register?
                  <Link
                    className="label-text-alt link link-hover font-semibold text-green-400"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </div>
              </label>
            </div>

            {/* Teacher Ar Jonno:
SL    Teacher Name Batch             09:30-12:30      02:30-05:30       06:30-09:30         Class Number      Ammount     Total Ammount */}

            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn bg-[#A7EABA] hover:bg-[#92E5A8] duration-300 text-gray-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="flex h-screen items-center pt-14">
    //   <div className="w-1/2">
    //     <img src={loginImage} className="h-full w-full" alt="" />
    //   </div>
    //   <div className="w-1/2 grid place-items-center">
    //     <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
    //       <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
    //       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    //         <div className="space-y-3">
    //           <div className="form-control">
    //             <label htmlFor="name" className="label">
    //               <span className="label-text"> Name</span>
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="name"
    //               name="name"
    //               id="email"
    //               className="input input-bordered focus:outline-none border-[#A7EABA]"
    //               {...register("email")}
    //             />
    //           </div>
    //           <div className="flex flex-col items-start">
    //             <label htmlFor="email" className="ml-5">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               {...register("email")}
    //             />
    //           </div>

    //           <div className="flex flex-col items-start">
    //             <label htmlFor="password" className="ml-5">
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               {...register("password")}
    //             />
    //           </div>
    //           <div className="flex flex-col items-start">
    //             <label htmlFor="confirm-password" className="ml-5">
    //               Confirm Password
    //             </label>
    //             <input
    //               type="password"
    //               id="confirm-password"
    //               {...register("confirmPassword")}
    //             />
    //           </div>
    //           <div className="!mt-8 ">
    //             <button
    //               type="submit"
    //               className="font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
    //               disabled={disabled}
    //             >
    //               Sign up
    //             </button>
    //           </div>
    //           <div>
    //             <p>
    //               Already have an account?{" "}
    //               <span
    //                 className="text-primary hover:underline cursor-pointer"
    //                 onClick={() => navigate("/login")}
    //               >
    //                 Login
    //               </span>
    //             </p>
    //           </div>
    //           <button
    //             onClick={handleGoogleSignIn}
    //             type="submit"
    //             className="font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
    //           >
    //             SignIn with google
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;
