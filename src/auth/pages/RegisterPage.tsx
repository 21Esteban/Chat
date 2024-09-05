import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <div className="w-full h-[36rem]">
        <form className="bg-white shadow-lg rounded-3xl px-8 pt-6 pb-8 h-full">
          <div className=" space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4 mt-4 space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div  className="space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div  className="space-y-2 mt-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="ConfirmPassword"
            >
             Confirm Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ConfirmPassword"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex justify-between space-y-2 mt-2">
            <Link  color='inherit' to="/auth/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
             
            >
              you have an account?
            </Link>
          </div>
          <div className="flex justify-center ">
          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 JlCoders. All rights reserved.
        </p>
      </div>
    </AuthLayout>
  );
};
