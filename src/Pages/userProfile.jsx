import React, { useState } from "react";
import DocumentUploadForm from "../components/Documents/Upload";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import AdminAside from "../components/Dashboard/AdminAside";

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [dob, setDob] = useState("1990-01-01");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Main St, Anytown");

  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader user={{ name }} />
      <div className="flex flex-1">
        <AdminAside />
        <div className="flex-1">
          <DocumentUploadForm />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
