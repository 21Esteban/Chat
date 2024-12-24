import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import customAxios from "../../utils/customAxios";
import { ToastContainer, toast } from "react-toastify";

interface RegisterData {
  userName: string;
  email: string;
  number: string;
  password: string;
  confirmPassword: string;
}

const initialData: RegisterData = {
  userName: "",
  email: "",
  number: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage = () => {
  const [formData, setFormData] = useState<RegisterData>(initialData);
  const navigate = useNavigate(); // Hook para redirigir

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validaciones
      if (
        !formData.userName ||
        !formData.email ||
        !formData.number ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        return toast("All fields are required");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return toast("Invalid email format");
      }

      if (formData.password !== formData.confirmPassword) {
        return toast("Passwords do not match");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {confirmPassword, ...data} = formData;
      const response = await customAxios.post("/auth/register", data);
      localStorage.setItem("token", response.data.token);
      toast(response.data.message,{
        onClose: () => navigate("/"),
      });

    } catch (error) { 
      console.log(error);
    }
  };

  return (
    <AuthLayout title="Register">
      <div className="w-full h-[36rem]">
        <form
          className="bg-white shadow-lg rounded-3xl px-8 pt-6 pb-8 h-full"
          onSubmit={sendForm}
        >
          <div className=" space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="userName"
            >
              userName
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="text"
              placeholder="userName"
              value={formData.userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prevValue: RegisterData) => ({
                  ...prevValue,
                  userName: e.target.value,
                }));
              }}
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
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prevValue: RegisterData) => ({
                  ...prevValue,
                  email: e.target.value,
                }));
              }}
            />
          </div>
          <div className="mb-4 mt-4 space-y-2">
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="phone"
            >
              phone number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="1234567890"
              value={formData.number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prevValue: RegisterData) => ({
                  ...prevValue,
                  number: e.target.value,
                }));
              }}
            />
          </div>
          <div className="space-y-2">
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
              value={formData.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prevValue: RegisterData) => ({
                  ...prevValue,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <div className="space-y-2 mt-2">
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
              value={formData.confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData((prevValue: RegisterData) => ({
                  ...prevValue,
                  confirmPassword: e.target.value,
                }));
              }}
            />
          </div>
          <div className="flex justify-between space-y-2 mt-2">
            <Link
              color="inherit"
              to="/auth/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 "
            >
              you have an account?
            </Link>
          </div>
          <ToastContainer
            position="top-center"
            pauseOnHover={false}
            theme="dark"
            autoClose={1500}
          />
          <div className="flex justify-center ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
