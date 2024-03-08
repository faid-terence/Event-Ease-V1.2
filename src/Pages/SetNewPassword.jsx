import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNewPassword } from "../features/Redux/user/userSclice";
import { toast } from "react-toastify";

export const SetNewPassword = () => {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetNewPassword = async (event) => {
    try {
      event.preventDefault();

      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      let userCredentials = {
        newPassword,
      };

      const result = await dispatch(setNewPassword(userCredentials));

      if (result.payload) {
        const message = result.payload.message;
        toast.success(message);
        setPassword("");
        setConfirmPassword("");
        navigate("/auth/signin");
      }
    } catch (error) {
      console.error("Password reset:", error);
      let errorMessage = "An error occurred during resetting password.";

      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Set New Password
          </h3>

          <form
            action=""
            className="px-5 md:py-0"
            onSubmit={handleSetNewPassword}
          >
            <div className="mb-5">
              <input
                type="password"
                placeholder="Enter your new password"
                onChange={(e) => setPassword(e.target.value)}
                value={newPassword}
                className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                placeholder="Confirm your new password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor cursor-pointer"
                required
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
