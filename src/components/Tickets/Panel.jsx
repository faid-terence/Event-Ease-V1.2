import React, { useEffect } from "react";
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
  console.log(tickets);
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

      <button className="btn w-full px-2 rounded-md">Buy Tickets</button>
    </div>
  );
};
