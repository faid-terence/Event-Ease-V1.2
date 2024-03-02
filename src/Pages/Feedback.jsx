import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import userImage from "../assets/terence 1.png";
import { Form } from "../components/Feedback/Form";
import { formateDate } from "../utilities";

export const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure>
              <img src={userImage} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Faid Terence JABO
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("02-14-2023")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good Services, Highly recommended{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#008000" />
            ))}
          </div>
        </div>
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <Form />}
    </div>
  );
};
