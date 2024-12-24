import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import customAxios from "../../utils/customAxios";

interface FormData {
  email: string;
  password: string;
}

const initialData: FormData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>(initialData);

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
    try {
      const respuesta = await customAxios.post("/auth/signIn", formData)
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthLayout title="Login">
      <div className="w-full max-w-3xl h-[36rem]">
        <form className="bg-white shadow-lg rounded-3xl px-6 pt-6 pb-8 mb-4 h-full flex flex-col justify-center items-center" onSubmit={sendForm}>
          <div className="mb-4 mt-4 w-80 space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prevValue: FormData) => ({
                  ...prevValue,
                  email: e.target.value,
                }));
              }}
            />
          </div>
          <div className="w-80 space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={formData.password}
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                setFormData((prevValue:FormData)=>({
                  ...prevValue,
                  password:e.target.value
                }))
              }}
            />
          </div>
          <div className="flex justify-between mt-4">
            <Link
              color="inherit"
              to="/auth/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mb-8"
            >
              Don't have an Account?
            </Link>
          </div>
          <div className="flex justify-center ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
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
