import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import uploadImageToCloudinary from "../../../utilities/uploadCloudinary";
import { useDispatch } from "react-redux";
import { organizerUpdateEvent } from "../../../features/Redux/organizer/organizerSlice";
import { toast } from "react-toastify";

const UpdateEventFormModal = ({ isOpen, onClose, eventData }) => {
  const [formData, setFormData] = useState({
    id: "",
    EventName: "",
    EventDate: "",
    EventLocation: "",
    EventDescription: "",
    EventVenue: "",
    EventPhoto: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventData) {
      setFormData({
        id: eventData.id || "",
        EventName: eventData.Event_Name || "",
        EventDate: eventData.Event_Date || "",
        EventLocation: eventData.Event_Location || "",
        EventDescription: eventData.Event_Description || "",
        EventVenue: eventData.Event_Venue || "",
        EventPhoto: eventData.Event_Photo || "",
      });
    }
  }, [eventData]);

  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const data = await uploadImageToCloudinary(file);

      setSelectedFile(data.url);
      setFormData((prevFormData) => ({
        ...prevFormData,
        EventPhoto: data.url,
      }));
      console.log("Event Image URL:", data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await dispatch(organizerUpdateEvent(formData));

      if (result.payload) {
        const message = "Event updated successfully!";
        toast.success(message);
        onClose();
      } else {
        if (result.error && result.error.message) {
          console.log("Error updating event:", result.error.message);
          toast.error(result.error.message);
        } else {
          const errorMessage = "Failed to update event.";
          toast.error(errorMessage);
        }
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("An error occurred while updating the event.");
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
          <h3 className="text-lg font-medium text-gray-900">Update Event</h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input type="hidden" name="id" value={formData.id} />
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
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    EventName: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    EventDate: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    EventLocation: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    EventDescription: e.target.value,
                  }))
                }
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="EventVenue"
                className="block text-sm font-medium text-gray-700"
              >
                Event Venue
              </label>
              <input
                type="text"
                id="EventVenue"
                name="EventVenue"
                value={formData.EventVenue}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    EventVenue: e.target.value,
                  }))
                }
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="EventPhoto"
                className="block text-sm font-medium text-gray-700"
              >
                Event Photo
              </label>
              <input
                type="file"
                id="EventPhoto"
                name="EventPhoto"
                onChange={handleFileInputChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#339657] text-white py-2 px-6 rounded-md focus:outline-none"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEventFormModal;
