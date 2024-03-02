import React from "react";
import paymentMethods from "../../assets/mtn4.png";
import { Link } from "react-router-dom";
import supportImage from "../../assets/support.jpg";
import perfomanceImage from "../../assets/Perfomance.jpg";
import supportImageII from "../../assets/customer.jpg";
import paymentMethodsII from "../../assets/pay.png";
import perfomanceImageII from "../../assets/dance.svg";

export const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={paymentMethodsII} alt="" width={550} />
            </div>
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Easy Payment Methods for Every one</h2>
              <p className="text_para">
                TickNet redefines event ticketing with a seamless, secure, and
                user-friendly payment process. Prioritizing your convenience and
                safety, we offer diverse payment options, including Mobile
                {/* Money, Airtel Money, and VisaCard. Choose the method that suits
                you best – whether it's the instant accessibility of Mobile
                Money, the simplicity of Airtel Money, or the global acceptance
                of VisaCard. Rest assured, TickNet's top-tier security features
                ensure your financial details are handled with utmost care. Your
                transactions with TickNet are not just processes; they are
                interactions designed for your satisfaction and peace of mind.
                Join us in experiencing a new standard in event ticketing. */}
              </p>
              <Link to="/">
                <button className="btn">Try it out </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">24/7 Customer Support Always Ready</h2>
              <p className="text_para">
                Our 24/7 customer support is always there to help you with any
                queries or issues. You can count on us at any time.
              </p>
              <Link to="/">
                <button className="btn">Contact Us </button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={supportImageII} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={perfomanceImageII} alt="" width={500} />
            </div>
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Access To World-Class Performances</h2>
              <p className="text_para">
                Our dynamic platform offers you a curated selection of tickets,
                granting access to an array of captivating events such as
                concerts, theatre productions, and shows taking place across the
                globe. Immerse yourself in a world of entertainment like never
                before, where every event becomes an opportunity to create
                {/* unforgettable memories. Explore the diverse cultural tapestry of
                performances and experiences brought to you by our platform,
                making each moment a celebration of global entertainment. Join
                us in unlocking the doors to unparalleled events that cater to
                every taste and preference, elevating your entertainment journey
                to new heights. */}
              </p>
              <Link to="/">
                <button className="btn">Try it out </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
