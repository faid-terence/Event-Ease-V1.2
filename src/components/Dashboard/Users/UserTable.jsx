import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import UpdateUserFormModal from "./UpdateUserFormModal";

const UserTable = ({ users, openModal }) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success("User deleted successfully");
  };

  return (
    <div className="overflow-x-auto px-10 mt-[150px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User List</h2>
        {/* <button onClick={openModal} className="btn">
          Add New User
        </button> */}
      </div>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-[#EAEAEA]">
            <th className="py-3 px-4 text-left">Username</th>
            <th className="py-3 px-4 text-left">Email</th>
            <th className="py-3 px-4 text-left">PhoneNumber</th>
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
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.phoneNumber}</td>
              <td className="py-3 px-4">
                <button className="mr-2">
                  <FaEye />
                </button>
                <button className="mr-2" onClick={() => handleEdit(user)}>
                  <FaEdit color="blue" />
                </button>
                <button onClick={() => handleDelete(user.id)}>
                  <FaTrash color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {selectedUser && (
        <UpdateUserFormModal
          isOpen={true}
          onClose={() => setSelectedUser(null)}
          userData={selectedUser}
        />
      )} */}
    </div>
  );
};

export default UserTable;
