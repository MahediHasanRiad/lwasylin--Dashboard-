import type { AppDispatch, RootState } from "@/store/store";
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
    }
  };

  return (
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
    </section>
  );
}

export default LoginPage;
