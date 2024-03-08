import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PopUp } from "../components/POPUPS/PopUp";
import { verifyEmail } from "../features/Redux/user/userSclice";

export const EmailVerified = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyEmail())
      .unwrap()
      .then(() => {
        setTimeout(() => {
          navigate("/auth/signin");
        }, 3000);
      });
  }, [dispatch]);
  return <PopUp title="Success" description="Your email has been verified" />;
};
