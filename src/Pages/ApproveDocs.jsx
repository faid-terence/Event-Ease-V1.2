import React, { useState } from "react";
import { FaCheck, FaTimes, FaFileUpload } from "react-icons/fa";

const ApproveUserDocs = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: "John Doe", document: "passport.pdf", status: "pending" },
    {
      id: 2,
      name: "Jane Smith",
      document: "driver_license.pdf",
      status: "approved",
    },
    {
      id: 3,
      name: "Bob Johnson",
      document: "birth_certificate.pdf",
      status: "pending",
    },
    // Add more documents as needed
  ]);

  const handleApprove = (id) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === id ? { ...doc, status: "approved" } : doc
      )
    );
  };

  const handleReject = (id) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === id ? { ...doc, status: "rejected" } : doc
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Approve User Documents</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Document</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr
                key={doc.id}
                className="bg-white hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="px-4 py-2">{doc.name}</td>
                <td className="px-4 py-2">{doc.document}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full font-semibold text-sm ${
                      doc.status === "pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : doc.status === "approved"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex items-center justify-center">
                  {doc.status === "pending" && (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2 transition-colors duration-300"
                        onClick={() => handleApprove(doc.id)}
                      >
                        <FaCheck className="inline-block mr-1" />
                        Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                        onClick={() => handleReject(doc.id)}
                      >
                        <FaTimes className="inline-block mr-1" />
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center transition-colors duration-300">
          <FaFileUpload className="inline-block mr-2" />
          Upload Document
        </button>
      </div>
    </div>
  );
};

export default ApproveUserDocs;
