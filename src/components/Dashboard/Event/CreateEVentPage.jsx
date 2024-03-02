import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    // Initial form data state
    personal: {
      fullName: "",
      dateOfBirth: "",
      email: "",
      mobileNumber: "",
      gender: "",
      occupation: "",
    },
    identity: {
      idType: "",
      idNumber: "",
      issuedAuthority: "",
      issuedState: "",
      issuedDate: "",
      expiryDate: "",
    },
    address: {
      addressType: "",
      nationality: "",
      state: "",
      district: "",
      blockNumber: "",
      wardNumber: "",
    },
    family: {
      fatherName: "",
      motherName: "",
      grandfather: "",
      spouseName: "",
      fatherInLaw: "",
      motherInLaw: "",
    },
  });

  const [activeForm, setActiveForm] = useState(1);

  const handleInputChange = (formSection, field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [formSection]: {
        ...prevFormData[formSection],
        [field]: value,
      },
    }));
  };

  const handleNextForm = () => {
    setActiveForm(activeForm + 1);
  };

  const handleBackForm = () => {
    setActiveForm(activeForm - 1);
  };

  const renderFormFields = (formSection, fields) => {
    return fields.map((field) => (
      <div key={field.name} className="input-field">
        <label>{field.label}</label>
        {field.type === "select" ? (
          <select
            value={formData[formSection]?.[field.name] || ""}
            onChange={(e) =>
              handleInputChange(formSection, field.name, e.target.value)
            }
            required
          >
            <option disabled selected>
              {field.placeholder}
            </option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            placeholder={field.placeholder}
            value={formData[formSection]?.[field.name] || ""}
            onChange={(e) =>
              handleInputChange(formSection, field.name, e.target.value)
            }
            required
          />
        )}
      </div>
    ));
  };

  const formSections = [
    {
      title: "Personal Details",
      fields: [
        {
          name: "fullName",
          label: "Full Name",
          type: "text",
          placeholder: "Enter your name",
        },
        {
          name: "dateOfBirth",
          label: "Date of Birth",
          type: "date",
          placeholder: "Enter birth date",
        },
        {
          name: "email",
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        {
          name: "mobileNumber",
          label: "Mobile Number",
          type: "number",
          placeholder: "Enter mobile number",
        },
        {
          name: "gender",
          label: "Gender",
          type: "select",
          placeholder: "Select gender",
          options: ["Male", "Female", "Others"],
        },
        {
          name: "occupation",
          label: "Occupation",
          type: "text",
          placeholder: "Enter your occupation",
        },
      ],
    },
    {
      title: "Identity Details",
      fields: [
        {
          name: "idType",
          label: "ID Type",
          type: "text",
          placeholder: "Enter ID type",
        },
        {
          name: "idNumber",
          label: "ID Number",
          type: "number",
          placeholder: "Enter ID number",
        },
        {
          name: "issuedAuthority",
          label: "Issued Authority",
          type: "text",
          placeholder: "Enter issued authority",
        },
        {
          name: "issuedState",
          label: "Issued State",
          type: "text",
          placeholder: "Enter issued state",
        },
        {
          name: "issuedDate",
          label: "Issued Date",
          type: "date",
          placeholder: "Enter issued date",
        },
        {
          name: "expiryDate",
          label: "Expiry Date",
          type: "date",
          placeholder: "Enter expiry date",
        },
      ],
    },
    {
      title: "Address Details",
      fields: [
        {
          name: "addressType",
          label: "Address Type",
          type: "text",
          placeholder: "Permanent or Temporary",
        },
        {
          name: "nationality",
          label: "Nationality",
          type: "text",
          placeholder: "Enter nationality",
        },
        {
          name: "state",
          label: "State",
          type: "text",
          placeholder: "Enter your state",
        },
        {
          name: "district",
          label: "District",
          type: "text",
          placeholder: "Enter your district",
        },
        {
          name: "blockNumber",
          label: "Block Number",
          type: "number",
          placeholder: "Enter block number",
        },
        {
          name: "wardNumber",
          label: "Ward Number",
          type: "number",
          placeholder: "Enter ward number",
        },
      ],
    },
    {
      title: "Family Details",
      fields: [
        {
          name: "fatherName",
          label: "Father Name",
          type: "text",
          placeholder: "Enter father name",
        },
        {
          name: "motherName",
          label: "Mother Name",
          type: "text",
          placeholder: "Enter mother name",
        },
        {
          name: "grandfather",
          label: "Grandfather",
          type: "text",
          placeholder: "Enter grandfather name",
        },
        {
          name: "spouseName",
          label: "Spouse Name",
          type: "text",
          placeholder: "Enter spouse name",
        },
        {
          name: "fatherInLaw",
          label: "Father in Law",
          type: "text",
          placeholder: "Enter father-in-law name",
        },
        {
          name: "motherInLaw",
          label: "Mother in Law",
          type: "text",
          placeholder: "Enter mother-in-law name",
        },
      ],
    },
  ];

  return (
    <>
      <section>
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <header className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create Event
          </header>
          <form className="space-y-4">
            {formSections.map((section, index) => (
              <div
                key={index}
                className={`form ${
                  activeForm === index + 1 ? "block" : "hidden"
                }`}
              >
                <div className="details">
                  <span className="title">{section.title}</span>
                  <div className="fields">
                    {renderFormFields(index, section.fields)}
                  </div>
                </div>
                <div className="buttons">
                  {activeForm > 1 && (
                    <div className="backBtn" onClick={handleBackForm}>
                      <FaArrowLeft className="uil uil-navigator" />
                      <span className="btnText">Back</span>
                    </div>
                  )}
                  {activeForm < formSections.length && (
                    <button
                      type="button"
                      className="nextBtn"
                      onClick={handleNextForm}
                    >
                      <span className="btnText">Next</span>
                      <FaArrowRight className="uil uil-navigator" />
                    </button>
                  )}
                  {activeForm === formSections.length && (
                    <button
                      type="submit"
                      className="submit"
                      onClick={(e) => e.preventDefault()} // Add your form submission logic here
                    >
                      <span className="btnText">Submit</span>
                      <FaArrowRight className="uil uil-navigator" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateEventForm;
