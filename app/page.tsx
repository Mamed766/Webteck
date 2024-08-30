"use client";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/config";
import { setCookie } from "cookies-next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .trim()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values: any, { setSubmitting }: any) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setSubmitting(false);

      if (res) {
        setCookie("user", "true");
        toast.success("Login successful!");
      }

      router.push("/home");
    } catch (error: any) {
      console.error("Firebase Error:", error);
      toast.error("Login failed. Please check your credentials.");
      setSubmitting(false);
    }
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1700593953156-13b945d76e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="https://themeholy.com/wordpress/fresh/wp-content/uploads/2024/02/logo.svg"
              width="200"
              height="10"
              alt="Logo"
            />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4 text-lg">
                  <Field
                    className="rounded-3xl border-none bg-[#1D303F] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                </div>

                <div className="mb-4 text-lg">
                  <Field
                    className="rounded-3xl border-none bg-[#1D303F] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1 text-sm"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="px-6 rounded py-2 font-medium bg-[#425769] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </div>
                <div className="pt-2">
                  <Link href="/register" className="text-blue-300">
                    Don`t have an account?
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
