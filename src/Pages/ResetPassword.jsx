import React from "react";

export const ResetPassword = () => {
  return (
    <div>
      <section className="px-5 lg:px-0">
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
            Reset Password
          </h3>

          <form action="" className="px-5 md:py-0">
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-primaryColor"
              />
            </div>

            <div className="mb-5">
              <button className="w-full bg-primaryColor text-white py-3 rounded-md">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
