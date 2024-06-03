import React from "react";

export const Services = () => {
  return (
    <div className="flex flex-col justify-center items-stretch">
      <div className="bg-zinc-100 flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1298px] flex-col items-center mt-7 max-md:max-w-full">
          <div className="heading max-md:max-w-full">
            Our Range of Amazing Services
          </div>
          <div className="text_para mt-10 max-md:max-w-full">
            We provide personalized services for every user's unique preference.
          </div>{" "}
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62ab2ba9bc03a1e853eb36de7af63b7f82523b372d15483217210e58abc6cd9?"
                  className="w-8 h-8 mb-6"
                  alt="Pre-Sale"
                />{" "}
                <div className="text-2xl font-bold mb-4">Pre-Sale</div>{" "}
                <div className="text_para">
                  Get exclusive pre-sale tickets for popular events.
                </div>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a3964cea307daf70e686c8b0451fcba28f685d0c9f2602f238c5d91673ee53b?"
                  className="w-8 h-8 mb-6"
                  alt="Returns"
                />{" "}
                <div className="text-2xl font-bold mb-4">Returns</div>{" "}
                <div className="text_para">
                  Secure and easy returns on ticket cancellation.
                </div>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be5da9726a69bde20df3be174036a75edea7b1ffee5e4b9267ae405f61f537c?"
                  className="w-8 h-8 mb-6"
                  alt="VIP"
                />{" "}
                <div className="text-2xl font-bold mb-4">VIP</div>{" "}
                <div className="text_para">
                  Enjoy premium experiences with our VIP tickets.
                </div>
              </div>
              {/* Service Card 4 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1ddf46adecab14143928b87908f711f585fb6b8685519780fb4f7daa059e33?"
                  className="w-8 h-8 mb-6"
                  alt="Mobile Tickets"
                />{" "}
                <div className="text-2xl font-bold mb-4">Mobile Tickets</div>{" "}
                <div className="text_para">
                  Get your digital ticket on your smartphone.
                </div>
              </div>
              {/* Service Card 5 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ba3e6b810823bc41c90795a915cfd111ecef58e700ef764f2fa4c6726345f0?"
                  className="w-8 h-8 mb-6"
                  alt="E-Tickets"
                />{" "}
                <div className="text-2xl font-bold mb-4">E-Tickets</div>{" "}
                <div className="text-xl">
                  Opt for e-tickets for touchless entry.
                </div>
              </div>
              {/* Service Card 6 */}
              <div className="bg-white rounded-3xl shadow-lg p-8 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/309fd21ba13741262bc6a9efec9b421f7e0c22a71682506657ad7b85af2c3865?"
                  className="w-8 h-8 mb-6"
                  alt="Group Booking"
                />{" "}
                <div className="text-2xl font-bold mb-4">Group Booking</div>{" "}
                <div className="text_para">
                  Book in bulk and enjoy discounted prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
