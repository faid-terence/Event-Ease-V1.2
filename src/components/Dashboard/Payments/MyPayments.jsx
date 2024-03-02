import React from "react";
import PaymentTable from "./PaymentTable";

const paymentsData = [
  { id: 1, amount: 100, date: "2024-02-20", status: "Paid" },
  { id: 2, amount: 50, date: "2024-03-05", status: "Pending" },
  { id: 3, amount: 200, date: "2024-03-15", status: "Paid" },
];

export const MyPayments = () => {
  return (
    <>
      <div className="max-w-[570px] mt-[100px] mx-auto bg-[#CCF4B3] rounded-md flex items-center justify-between">
        <input
          type="search"
          className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search for a payment"
        />
        <button className="btn mt-0 rounded-[0px] rounded-r-md  ">
          Search
        </button>
      </div>

      <PaymentTable payments={paymentsData} />
    </>
  );
};
