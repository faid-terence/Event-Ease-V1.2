import React, { useState } from "react";
import { BsArrowBarDown, BsArrowBarRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createEvent } from "../features/Redux/events/eventSlice";
import uploadImageToCloudinary from "../utilities/uploadCloudinary";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventData, setEventData] = useState({
    EventName: "",
    EventDescription: "",
    EventDate: "",
    EventLocation: "",
    EventVenue: "",
    EventPhoto: selectedFile,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const isMediumDevice = window.innerWidth <= 768;

  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const data = await uploadImageToCloudinary(file);

      setSelectedFile(data.url);
      setEventData({ ...eventData, EventPhoto: data.url });
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
      if (
        !eventData.EventName ||
        !eventData.EventDate ||
        !eventData.EventDescription ||
        !eventData.EventLocation ||
        !eventData.EventVenue
      ) {
        toast.error("Please fill in all fields.");
        return;
      }

      if (!selectedFile) {
        toast.error("Please upload an event image.");
        return;
      }

      if (eventData.EventDate < new Date().toISOString().split("T")[0]) {
        toast.error("Event date cannot be in the past.");
        return;
      }

      const result = await dispatch(createEvent(eventData));
      if (result.error) {
        console.error("Error creating event:", result.error.message);
      } else if (result.payload) {
        const message = "Event created successfully!";
        toast.success(message);
        setTimeout(() => {
          navigate("/events");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Error creating event:", error);
      const errorMessage = "An error occurred while creating the event.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto my-[100px]">
      <div className="w-full p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl mb-6 font-bold text-center text-gray-800">
            Create Event
          </h2>
          <form id="eventForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <div className="text-lg text-gray-700 font-semibold">
                Event Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    required
                    onChange={handleChange}
                    value={eventData.EventName}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="EventDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date and Time
                  </label>
                  <input
                    type="datetime-local"
                    id="EventDate"
                    name="EventDate"
                    required
                    onChange={handleChange}
                    value={eventData.EventDate}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="EventDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="EventDescription"
                  name="EventDescription"
                  onChange={handleChange}
                  value={eventData.EventDescription}
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  rows="3"
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="EventLocation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="EventLocation"
                    name="EventLocation"
                    onChange={handleChange}
                    value={eventData.EventLocation}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="EventVenue"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Venue
                  </label>
                  <input
                    type="text"
                    id="EventVenue"
                    name="EventVenue"
                    onChange={handleChange}
                    value={eventData.EventVenue}
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mt-8">
                {selectedFile && (
                  <figure className="w-48 h-50 border-2 border-solid bg-green-300 flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedFile}
                      alt="Event"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                )}
                <div className="relative w-full h-12 mt-4">
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
                    className="absolute top-0 left-0 w-full flex items-center justify-center px-3 py-2 text-sm leading-5 text-gray-800 bg-gray-200 font-semibold rounded-md truncate cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
                  >
                    Add Event Image
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="flex flex-col space-y-10">
          <div className="text-lg font-semibold">Step 1: Event Information</div>
          <div className="flex items-center text-gray-800">
            {isMediumDevice ? (
              <BsArrowBarRight className="text-2xl" />
            ) : (
              <BsArrowBarDown className="text-2xl" />
            )}
          </div>
          <div className="text-lg font-semibold">
            Step 2: Ticket Information
          </div>
          <div className="flex items-center text-gray-800">
            {isMediumDevice ? (
              <BsArrowBarRight className="text-2xl" />
            ) : (
              <BsArrowBarDown className="text-2xl" />
            )}
          </div>
          <div className="text-lg font-semibold">Step 3: Submission</div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage;
