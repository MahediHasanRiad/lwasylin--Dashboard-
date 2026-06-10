import type { AppDispatch, RootState } from "@/store/store";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./redux/login.thunk";
import { useNavigate } from "react-router";
import { z } from "zod";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import ErrorMsg from "@/shared/error-message";
import { toast } from "sonner";

const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>();

  const { isLoading, isError, data } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  console.log(data);
  const onSubmitHandler: SubmitHandler<LoginSchemaType> = async (loginData) => {
    try {
      await dispatch(loginThunk(loginData)).unwrap();
      
      if (data.accessToken) {
        JSON.stringify(localStorage.setItem("access-token", data?.accessToken));
      }
      navigate(`/`);
      toast.success("Successfully Login !");
    } 
    catch (error) {
      console.log(error);
      toast.error(isError.message)
=======
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./redux/login.thunk";
import { useNavigate } from "react-router";

const initialState = {
  email: "",
  password: "",
};

function LoginPage() {

  const [loginData, setLoginData] = useState(initialState);

  const {data} = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();


console.log('login data', data)

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    try {
      await dispatch(loginThunk(loginData)).unwrap()
      localStorage.setItem('access-token', data.accessToken)
      navigate(`http://localhost:5173/`);
    } 
    catch (error) {
        console.log(error)
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    }
  };

  return (
<<<<<<< HEAD
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {/* Fields */}
            <div className="space-y-5">
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: { value: true, message: "Email required !!!" },
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      className={`${errors.email && "border-red-700"}`}
                    />
                  )}
                />
                {errors.email && <ErrorMsg error={errors.email.message} />}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Password required !!!",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        className={`${errors.password && "border-red-700"}`}
                      />
                    )}
                  />
                  {errors.password && (
                    <ErrorMsg error={errors.password.message} />
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-7 w-full py-2.5 px-4 rounded-lg bg-primary-0 text-white text-sm font-medium tracking-wide hover:bg-gray-700 active:scale-[0.98] transition-all duration-150 cursor-pointer"
            >
              {isLoading ? "Sign in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
=======
    <section className="flex justify-center items-center">
      <input
        name="email"
        placeholder="example@gmail.com"
        onChange={onChangeHandler}
        value={loginData.email}
        className="border p-4"
      />
      <input
        name="password"
        placeholder="*******************"
        onChange={onChangeHandler}
        value={loginData.password}
        className="border p-4"
      />
      <button onClick={submitHandler} className="py-4 px-2 border cursor-pointer">Login</button>
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    </section>
  );
}

export default LoginPage;
