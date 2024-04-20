import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

export const SuccessfulPayment = () => {
  return (
    <>
      <div className="popup pop-center">
        <div className="pop-icon">
          <AiFillCheckCircle size={50} color="green" />
        </div>
        <div className="pop-title">Payment successful</div>
        <div className="pop-description">
          Your payment was successful. You will receive an email with your
          ticket details.
        </div>
      </div>
    </>
  );
};
