import React, { useState } from "react";
import { database } from "../../firebase.init";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    console.log(e);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "login") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          toast("Wellcome to SignUp");
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          toast("Wellcome to...");
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h1 className="text-4xl text-primary text-center font-semibold mb-6">
          {login ? "Sign Up" : "Sign In"}
        </h1>

        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#5A7184] text-sm font-semibold mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="w-full text-primary border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#5A7184] text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full text-primary border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={handleReset}
          >
            Forgot Password?
          </a>
          <br />
          <button
            type="submit"
            to="/home"
            className="bg-blue-500 w-full hover:bg-blue-600 py-2 my-4 text-white font-semibold rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            Login
          </button>
          <p className="text-[#5A7184] font-semibold text-text-[14px] inline">
            You have an account?
          </p>
          <NavLink
            className=" px-3 mr-5  text-[#1565D8] font-bold text-[14px] hover:underline"
            to="/signup"
          >
            {login ? "Login now" : "Register now"}
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
