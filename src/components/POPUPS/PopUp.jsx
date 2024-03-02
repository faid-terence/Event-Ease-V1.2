import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Pop.css";

export const PopUp = (props) => {
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
