import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ForgetPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal)
      .then((data) => {
        toast("Please Check your Email");
        history("/");
      })
      .catch((err) => {
        toast("You don't have any Email");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-4xl text-primary text-center font-semibold mb-6">
          Forgot Password
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <br />
          <br />
          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-600 py-2 my-4 text-white font-semibold rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
export default ForgetPassword;
