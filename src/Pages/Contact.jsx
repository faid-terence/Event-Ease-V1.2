import React, { useState } from "react";
import contactImage from "../assets/contact.svg";
import { useDispatch } from "react-redux";
import { sendMessage } from "../features/Redux/messages/message-slice";
import { toast } from "react-toastify";

export const Contact = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    messageSubject: "",
    message: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct message object
    let message = {
      userEmail: formData.userEmail,
      messageSubject: formData.messageSubject,
      message: formData.message,
    };

    // Dispatch action and handle result
    dispatch(sendMessage(message)).then((result) => {
      if (result.payload) {
        // Message successfully sent
        const successMessage = result.payload.message;
        toast.success(successMessage); // Display success toast
        // Reset form fields
        setFormData({
          userEmail: "",
          messageSubject: "",
          message: "",
        });
      } else {
        // Handle error if payload is not available
        toast.error("Failed to send message");
      }
    });
  };

  return (
    <section className="flex flex-wrap items-center justify-center">
      <div className="container flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <img src={contactImage} alt="" className="mx-auto md:mx-0 w-full" />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <h2 className="heading text-center md:text-left lg:text-left">
            Have you any Questions?
          </h2>
          <p className="text_para text-center">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="form__label">
                Your Email
              </label>
              <input
                type="email"
                name="userEmail"
                id="email"
                value={formData.userEmail}
                onChange={handleChange}
                className="form__input mt-1"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="form__label">
                Subject
              </label>
              <input
                type="text"
                name="messageSubject"
                id="subject"
                value={formData.messageSubject}
                onChange={handleChange}
                className="form__input mt-1"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form__label">
                Your Message
              </label>
              <textarea
                rows="6"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="form__input mt-1"
                placeholder="Leave a Comment ............"
              />
            </div>
            <button type="submit" className="btn rounded sm:w-fit">
              SEND!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
