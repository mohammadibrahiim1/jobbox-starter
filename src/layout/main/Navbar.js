import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    user: { email, userType },
  } = useSelector((state) => state?.auth);
  console.log(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
      navigate("/login");
    });
  };

  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl">
          <Link to="/">JobBox</Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>
        {email &&  (
          <li>
            <Link
              to="/dashboard"
              className="border border-black px-2 py-1 btn btn-xs rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
            >
              Dashboard
            </Link>
          </li>
        )}
        {email && !userType && (
          <li>
            <Link
              to="/register"
              className="border border-black px-2 py-1 btn btn-xs rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all"
            >
              Get start
            </Link>
          </li>
        )}

        <li>
          {email ? (
            <button className="btn btn-xs" onClick={handleSignOut}>
              Logout
            </button>
          ) : (
            <Link
              className="border border-black px-2 py-1 btn btn-xs rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all"
              to="/login"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
