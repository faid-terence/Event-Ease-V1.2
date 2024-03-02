import React from "react";

export const SubScribe = () => {
  return (
    <section>
      <div className=" container flex flex-col justify-center items-stretch">
        <div className="bg-primaryColor flex w-full flex-col justify-center items-center px-16 py-11 max-md:max-w-full max-md:px-5">
          <div className="flex w-[848px] max-w-full flex-col items-stretch mb-10">
            <div className="text-white text-4xl font-bold self-center max-md:max-w-full">
              Join Our Global Family Today!
            </div>
            <div className="text-zinc-100 text-2xl self-center mt-7 max-md:max-w-full">
              Subscribe today and get the best of upcoming events at your
              fingertips.
            </div>
            <div className="bg-zinc-100 flex flex-col justify-center mt-20 pl-16 pr-6 py-5 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
              />
              <button className="btn mt-4 bg-black">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
