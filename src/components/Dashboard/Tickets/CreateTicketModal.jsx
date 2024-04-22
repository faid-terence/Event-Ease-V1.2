import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { assignTicketToEvent } from "../../../features/Redux/Tickets/ticketSlice";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import uploadImageToCloudinary from "../../../utilities/uploadCloudinary";

export const CreateTicketModal = ({ isOpen, onClose, eventId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    id: eventId,
    category: "",
    price: "",
    availableQuantity: "",
    companyLogo: selectedFile,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        return;
      }

      const data = await uploadImageToCloudinary(file);

      setSelectedFile(data.url);
      setTicketDetails({ ...ticketDetails, companyLogo: data.url });
      console.log("Event Image URL:", data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await dispatch(assignTicketToEvent(ticketDetails));
      if (result.payload) {
        const message = "Ticket created successfully!";
        toast.success(message);
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error("Error creating ticket:", error);
      toast.error("Failed to create ticket");
    } finally {
      setLoading(false);
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
        <h2 className="text-2xl font-bold mb-4">Create Ticket</h2>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={ticketDetails.id} />
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Ticket Name
            </label>
            <input
              type="text"
              value={ticketDetails.category}
              name="category"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Price</label>
            <input
              type="number"
              value={ticketDetails.price}
              name="price"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Quantity</label>
            <input
              type="number"
              name="availableQuantity"
              value={ticketDetails.availableQuantity}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:border-blue-400"
            />
          </div>
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
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
            >
              {loading ? (
                <HashLoader size={35} color="#ffffff" />
              ) : (
                "Create Ticket"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
