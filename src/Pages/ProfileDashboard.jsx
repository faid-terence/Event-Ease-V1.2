import React, { useState } from "react";

const ProfileDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "avatar" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the formData object to the server using fetch, axios, or another method
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      bio: "",
      avatar: null,
    });
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-100 w-1/2 flex items-center justify-center">
        <div className="max-w-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Welcome to Your Dashboard
          </h2>
          <p className="text-gray-600 mb-8">
            Here you can update your profile and manage your account
            information.
          </p>
          <button className="bg-[#339657] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2">
            View Account
          </button>
        </div>
      </div>
      <div className="bg-white w-1/2 flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Update Your Profile
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="bio"
                className="block text-gray-700 font-medium mb-2"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="avatar"
                className="block text-gray-700 font-medium mb-2"
              >
                Avatar
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleChange}
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#339657] text-white font-medium rounded-md  focus:outline-none focus:ring-2"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
