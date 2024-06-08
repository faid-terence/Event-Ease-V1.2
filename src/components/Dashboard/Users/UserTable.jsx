import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const UserTable = ({ users, openModal }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    openModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success("User deleted successfully");
  };

  return (
    <div className="overflow-x-auto px-4 mt-[150px] w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User List</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#EAEAEA]">
            <th className="py-3 px-4 text-left">Username</th>
            <th className="py-3 px-4 text-left hidden md:table-cell">Email</th>
            <th className="py-3 px-4 text-left hidden md:table-cell">
              Phone Number
            </th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-300 hover:bg-gray-100 transition-all duration-200"
            >
              <td className="py-3 px-4">{user.fullNames}</td>
              <td className="py-3 px-4 hidden md:table-cell">{user.email}</td>
              <td className="py-3 px-4 hidden md:table-cell">
                {user.phoneNumber}
              </td>
              <td className="py-3 px-4 flex items-center">
                <button className="mr-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  <FaEye />
                </button>
                <button
                  className="mr-2 text-blue-500 hover:text-blue-600 transition-colors duration-300"
                  onClick={() => handleEdit(user)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-600 transition-colors duration-300"
                  onClick={() => handleDelete(user.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
