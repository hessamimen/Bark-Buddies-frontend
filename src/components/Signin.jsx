import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/logo.png";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-1/2 mx-auto py-10">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="text-[36px] text-white font-display">
          Bark <br /> Buddies
        </h1>
      </div>
      <div className="w-full max-w-sm p-4 bg-transparent pt-16  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-[30px] font-bold text-white">Login</h5>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              required
            />
          </div>
          <div className="flex items-start">
            <a
              href="/"
              className="ml-auto text-sm text-white hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gray-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="">
            <p className="text-white">Don't have an account?</p>

            <a
              href="/"
              className="text-white hover:underline font-bold"
              onClick={() => navigate("/")}
            >
              Sign up here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;