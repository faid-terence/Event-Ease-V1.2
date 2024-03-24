import React, { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [dob, setDob] = useState("1990-01-01");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main St, Anytown");

  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
        My Profile
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="dob" className="text-gray-600">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="input-field"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="gender" className="text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            className="input-field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-gray-600">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="address" className="text-gray-600">
            Address
          </label>
          <textarea
            id="address"
            className="input-field"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
