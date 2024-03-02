import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const PaymentTable = ({ payments, openModal }) => {
  return (
    <div className="overflow-x-auto px-10 mt-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Payment List</h2>
        {/* <button onClick={openModal} className="btn">
          Add New Payment
        </button> */}
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#EAEAEA]">
            <th className="py-3 px-4 text-left">Payment ID</th>
            <th className="py-3 px-4 text-left">Amount</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Status</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              className="border-b border-gray-300 hover:bg-gray-100 transition-all duration-200"
            >
              <td className="py-3 px-4">{payment.id}</td>
              <td className="py-3 px-4">{payment.amount}</td>
              <td className="py-3 px-4">{payment.date}</td>
              <td className="py-3 px-4">{payment.status}</td>
              <td className="py-3 px-4">
                <button className="mr-2">
                  <FaEye />
                </button>
                <button className="mr-2">
                  <FaEdit color="blue" />
                </button>
                <button>
                  <FaTrash color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
