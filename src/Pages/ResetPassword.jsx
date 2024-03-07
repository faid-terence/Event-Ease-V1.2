import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUserPassword } from "../features/Redux/user/userSclice";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      let userCredentials = {
        email,
      };

      const result = await dispatch(resetUserPassword(userCredentials));

      if (result.payload) {
        const message = result.payload.message;
        toast.success(message);
        setEmail("");
        setTimeout(() => {
          navigate("/auth/signin");
        }, 4000);
      }
    } catch (error) {
      console.error("Password reset:", error);
      let errorMessage = "An error occurred during resetting password.";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Reset Password
          </h3>

          <form
            action=""
            className="px-5 md:py-0"
            onSubmit={handleResetPassword}
          >
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-primaryColor"
              />
            </div>

            <div className="mb-5">
              <button className="w-full bg-primaryColor text-white py-3 rounded-md">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
