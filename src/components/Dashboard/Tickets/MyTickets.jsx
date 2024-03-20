import React from "react";
import { TicketTable } from "./TicketTable";

export const MyTickets = () => {
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
      <TicketTable />
    </>
  );
};
