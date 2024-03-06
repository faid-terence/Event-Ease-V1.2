import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchEventById,
  fetchEventWithTickets,
} from "../../features/Redux/events/eventSlice";

export const Panel = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { events, loading, hasErrors } = useSelector((state) => state.event);

  useEffect(() => {
    if (id) {
      dispatch(fetchEventById(id));
    }
  }, [dispatch, id]);

  const event = events.length > 0 ? events[0] : null;
  const tickets = event?.tickets;

  const [selectedCategory, setSelectedCategory] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleBuyTickets = () => {
    if (selectedCategory && quantity > 0) {
      console.log("Selected Category:", selectedCategory);
      console.log("Quantity:", quantity);
    } else {
      alert("Please select a category and enter a valid quantity.");
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Event Ticketing</p>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor ">
          Ticket Categories:
        </p>
        <ul className="mt-3">
          {tickets &&
            tickets.map((ticket, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {ticket.category}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  ${ticket.price}
                </p>
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 gap-y-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Select Category:
            </label>
            <select
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a category...</option>
              {tickets &&
                tickets.map((ticket, index) => (
                  <option key={index} value={ticket.category}>
                    {ticket.category}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleBuyTickets}
        className="btn w-full px-2 rounded-md mt-4"
      >
        Buy Tickets
      </button>
    </div>
  );
};
