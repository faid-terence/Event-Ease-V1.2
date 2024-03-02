import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const CreateEventFormModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    organizerName: "",
    organizerEmail: "",
    ticketPrice: "",
    ticketQuantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      eventName: "",
      eventDate: "",
      eventLocation: "",
      eventDescription: "",
      organizerName: "",
      organizerEmail: "",
      ticketPrice: "",
      ticketQuantity: "",
    });

    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-900">Create Event</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="eventName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="eventLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="eventDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Description
                </label>
                <textarea
                  id="eventDescription"
                  name="eventDescription"
                  value={formData.eventDescription}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#339657] text-white py-2 px-6 rounded-md focus:outline-none"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Organizer Information
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="organizerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  value={formData.organizerName}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="organizerEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Email
                </label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  value={formData.organizerName}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="companyLogo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Logo
                </label>
                <input
                  type="file"
                  id="companyLogo"
                  name="companyLogo"
                  accept="image/*"
                  // onChange={handleLogoChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-between">
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-6 rounded-md focus:outline-none"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#339657] text-white py-2 px-6 rounded-md focus:outline-none"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Ticketing Information
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="ticketPrice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ticket Price
                </label>
                <input
                  type="text"
                  id="ticketPrice"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="ticketQuantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ticket Quantity
                </label>
                <input
                  type="number"
                  id="ticketQuantity"
                  name="ticketQuantity"
                  value={formData.ticketQuantity}
                  onChange={handleChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-6 rounded-md focus:outline-none"
                  onClick={() => setStep(step - 2)}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#339657] text-white py-2 px-6 rounded-md focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="bg-white w-full max-w-md p-6 rounded-lg overflow-hidden shadow-md relative">
        <div className="absolute top-0 right-0 m-4">
          <button onClick={onClose}>
            <FaTimes className="cursor-pointer hover:bg-white" color="red" />
          </button>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};

export default CreateEventFormModal;
