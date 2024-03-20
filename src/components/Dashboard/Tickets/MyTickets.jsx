import React, { useEffect } from "react";
import { TicketTable } from "./TicketTable";

import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../../../features/Redux/Tickets/ticketSlice";

export const MyTickets = () => {
  const dispatch = useDispatch();

  const { tickets, loading, hasErrors } = useSelector((state) => state.ticket);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (hasErrors) return <div>Error: {hasErrors}</div>;

  return (
    <>
      <div>
        <input
          type="search"
          className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search for an event"
        />
        <button className="btn mt-0 rounded-[0px] rounded-r-md  ">
          Search
        </button>
      </div>
      <TicketTable tickets={tickets} />
    </>
  );
};
