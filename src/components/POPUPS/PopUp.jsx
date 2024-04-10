import React, { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Pop.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../../features/Redux/user/userSclice";

export const PopUp = (props) => {
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

  const { title, description } = props;
  return (
    <div className="popup pop-center">
      <div className="pop-icon">
        <AiFillCheckCircle size={50} color="green" />
      </div>
      <div className="pop-title">{title}</div>
      <div className="pop-description">{description}</div>
    </div>
  );
};
