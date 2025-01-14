/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import customAxios from "@/utils/customAxios";
import { useState } from "react";

const formSchema = z
  .object({
    userName: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email format" }),
    number: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters long" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const RegisterPage = () => {
  const [backMessage, setBackMessage ] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const sendForm = async (values: z.infer<typeof formSchema>) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...rest } = values;
      const response = await customAxios.post("/auth/register", rest);
      if(response.data.token){
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } 
    } catch (error:any) {
      console.log(error);
      setBackMessage(error.response.data.message);
    }
  };

  return (
    <AuthLayout title="Register">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(sendForm)}
          className="space-y-4 w-[80%] rounded-3xl md:w-[50%] lg:w-[40%] xl:w-[20%]"
        >
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input placeholder="Jhon doe" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="youremail@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="3020323400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
          <p className="text-sm font-medium text-destructive text-center">{backMessage}</p>
          <div className="text-center mt-4 text-sm text-zinc-50">
            ¿Dont have an account?{" "}
            <Link
              to="/auth/login"
              className=" text-blue-400 hover:underline font-medium"
            >
              Login
            </Link>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};
