import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import signUpImg from "../assets/lsignup.gif";
import avartar from "../assets/terence 1.png";
import signUpImgII from "../assets/Signup-svg-2.svg";
import Flags from "react-flags-select";
import uploadImageToCloudinary from "../utilities/uploadCloudinary";
import { toast } from "react-toastify";


import HashLoader from "react-spinners/HashLoader";
import EastAfricanFlags from "../components/countries/EastAfrica.jsx";
export const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullNames: "",
    email: "",
    country: "",
    phoneNumber: "",
    password: "",
    profilePhoto: selectedFile,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const data = await uploadImageToCloudinary(file);

      setPreviewUrl(data.url);
      setSelectedFile(file);
      setFormData({ ...formData, profilePhoto: data.url });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg h-[780px]">
            <figure className="rounded-l-lg mt-[200px] mr-[150px]">
              <img src={signUpImgII} alt="" className="w-full rounded-l-lg " />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor"> account </span>
            </h3>

            <form action="" onSubmit={submitHandler}>
              <div className="mb-5">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Full names<span className="text-red-500 ml-2">*</span>:
                  <input
                    type="text"
                    // placeholder="Full Names"
                    name="fullNames"
                    value={formData.fullNames}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                    required
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Email<span className="text-red-500 ml-2">*</span>:
                  <input
                    type="email"
                    // placeholder="Email Address *"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                    required
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Current location<span className="text-red-500 ml-2">*</span>:
                  <EastAfricanFlags
                    selected={formData.country}
                    onSelect={(countryCode) =>
                      handleInputChange({
                        target: { name: "country", value: countryCode },
                      })
                    }
                  />
                </label>
              </div>

              <div className="mb-5">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Phone Number<span className="text-red-500 ml-2">*</span>:
                  <input
                    type="tel"
                    // placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#CCF4B3] focus:outline-none placeholder:text-textColor cursor-pointer"
                    required
                  />
                </label>
              </div>

              <div className="mb-5">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Password<span className="text-red-500 ml-2">*</span>:
                  <input
                    type="password"
                    // placeholder="Create a strong Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor cursor-pointer"
                    required // Ensure password field is marked as required
                  />
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {previewUrl && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid bg-[#CCF4B3] flex items-center justify-center">
                    <img
                      src={previewUrl}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileInputChange}
                    id="customFile"
                    accept=".jpg, .png, .jpeg"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#CCF4B3] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Profile
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "  SIGN UP!"
                  )}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link
                  to="/auth/signin"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
