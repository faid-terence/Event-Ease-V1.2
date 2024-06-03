import React from "react";
import danceImage from "../../assets/images/hellodance.jpg";
import tansImage from "../../assets/images/trans.jpeg";
import contImage from "../../assets/images/cont.jpeg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section className="about-section py-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src={tansImage}
                alt="Payment Methods"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Easy Payment Methods for Everyone
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                TickNet redefines event ticketing with a seamless, secure, and
                user-friendly payment process. Prioritizing your convenience and
                safety, we offer diverse payment options, including Mobile.
              </p>
              <Link to="/">
                <button className="btn-primary px-8 py-3 bg-primaryColor text-white font-semibold rounded-lg shadow-md hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-300 ease-in-out">
                  Try it out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                24/7 Customer Support Always Ready
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our 24/7 customer support is always there to help you with any
                queries or issues. You can count on us at any time.
              </p>
              <Link to="/">
                <button className="btn-primary px-8 py-3 bg-primaryColor text-white font-semibold rounded-lg shadow-md hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-300 ease-in-out">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={contImage}
                alt="Customer Support"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section py-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src={danceImage}
                alt="World-Class Performances"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Access To World-Class Performances
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our dynamic platform offers you a curated selection of tickets,
                granting access to an array of captivating events such as
                concerts, theatre productions, and shows taking place across the
                globe. Immerse yourself in a world of entertainment like never
                before, where every event becomes an opportunity to create
                lasting memories.
              </p>
              <Link to="/">
                <button className="btn-primary px-8 py-3 bg-primaryColor text-white font-semibold rounded-lg shadow-md hover:bg-primaryColor focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-300 ease-in-out">
                  Try it out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
