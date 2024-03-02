
import React from "react";

export const Panel = () => {
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
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              VIP Pass
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              $100
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              General Admission
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              $50
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Student Pass
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              $25
            </p>
          </li>
        </ul>
      </div>

      <button className="btn w-full px-2 rounded-md">Buy Tickets</button>
    </div>
  );
};


