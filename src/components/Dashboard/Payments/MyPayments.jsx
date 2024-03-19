import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayments } from "../../../features/Redux/Payments/payment-slice";
import PaymentTable from "./PaymentTable";

export const MyPayments = () => {
  const dispatch = useDispatch();
  const paymentState = useSelector((state) => state.payment);
  const { payment: payments, loading, error } = paymentState || {};

  useEffect(() => {
    dispatch(getAllPayments());
  }, [dispatch]);
  const paymentsDetails = payments.data;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
      {paymentsDetails && paymentsDetails.length > 0 && (
        <PaymentTable payments={paymentsDetails} />
      )}
    </>
  );
};
