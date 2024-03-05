import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import uploadImageToCloudinary from "../../../utilities/uploadCloudinary";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../../features/Redux/events/eventSlice";
import { toast } from "react-toastify";

const CreateEventFormModal = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    EventName: "",
    EventDate: "",
    EventLocation: "",
    EventDescription: "",
    EventVenue: "",
    EventPhoto: selectedFile,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const data = await uploadImageToCloudinary(file);

      setSelectedFile(data.url);
      setFormData({ ...formData, EventPhoto: data.url });
      console.log("Event Image URL:", data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in.");
      return;
    }

    try {
      const result = await dispatch(createEvent(formData));

      if (result.payload) {
        const message = "Event created successfully!";
        toast.success(message);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error creating event:", error);
      const errorMessage = "An error occurred while creating the event.";
      toast.error(errorMessage);
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
        <div>
          <h3 className="text-lg font-medium text-gray-900">Create Event</h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="EventName"
                className="block text-sm font-medium text-gray-700"
              >
                Event Name
              </label>
              <input
                type="text"
                id="EventName"
                name="EventName"
                value={formData.EventName}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="EventDate"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date
              </label>
              <input
                type="datetime-local"
                id="EventDate"
                name="EventDate"
                value={formData.EventDate}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="EventLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Event Location
              </label>
              <input
                type="text"
                id="EventLocation"
                name="EventLocation"
                value={formData.EventLocation}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="EventLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Event Venue
              </label>
              <input
                type="text"
                id="EventVenue"
                name="EventVenue"
                value={formData.EventVenue}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="EventDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Event Description
              </label>
              <textarea
                id="EventDescription"
                name="EventDescription"
                value={formData.EventDescription}
                onChange={handleChange}
                rows="3"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              {selectedFile && (
                <figure className="w-48 h-50 border-2 border-solid bg-green-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedFile}
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </figure>
              )}
              <div className="relative w-[180px] h-[50px]">
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
                  className="absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.75rem] text-[15px] leading-6 overflow-hidden bg-[#CCF4B3] text-headingColor font-semibold rounded-lg truncate cursor-pointer mt-3"
                >
                  Upload Event Image
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#339657] text-white py-2 px-6 rounded-md focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventFormModal;
