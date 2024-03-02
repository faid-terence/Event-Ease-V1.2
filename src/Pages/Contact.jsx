import React from "react";
import contactImage from "../assets/contact.svg";

export const Contact = () => {
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
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="form__label">
                Your Email
              </label>
              <input
                type="email"
                name=""
                id="email"
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
                name=""
                id="subject"
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
                name=""
                id="message"
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
