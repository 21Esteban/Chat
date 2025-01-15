import { AuthLayout } from "../layout/AuthLayout";
import customAxios from "../../utils/customAxios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const sendForm = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await customAxios.post("/auth/signIn", values);
      const { data, token } = response.data;

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <AuthLayout title="Login in">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(sendForm)}
          className="space-y-4 w-[80%] rounded-3xl md:w-[50%] lg:w-[40%] xl:w-[20%]"
        >
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
          <Button type="submit" className="w-full">
            Submit
          </Button>
          <div className="text-center mt-4 text-sm text-zinc-50">
            ¿Dont have an account?{" "}
            <Link
              to="/auth/register"
              className=" text-blue-400 hover:underline font-medium"
            >
              Register
            </Link>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};
