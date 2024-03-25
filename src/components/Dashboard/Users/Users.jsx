import React, { useState, useEffect } from "react";
import UserTable from "./UserTable";
import { useDispatch, useSelector } from "react-redux";
import { adminFetchAllUsers } from "../../../features/Redux/admin/admin-slice";

const Users = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(adminFetchAllUsers());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(users);
  return (
    <>
      <div className="max-w-[570px] mt-[100px] mx-auto bg-[#CCF4B3] rounded-md flex items-center justify-between">
        <input
          type="search"
          className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
          placeholder="Search for an event"
        />
        <button className="btn mt-0 rounded-[0px] rounded-r-md  ">
          Search
        </button>
      </div>
      <UserTable users={users} openModal={isModalOpen} />
    </>
  );
};

export default Users;
