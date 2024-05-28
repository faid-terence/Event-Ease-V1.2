import React, { useState } from "react";

const DocumentUploadForm = () => {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("File:", file);
    console.log("Document Type:", documentType);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Upload Document</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="file"
            >
              Upload File
            </label>
            <input
              type="file"
              id="file"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="documentType"
            >
              Document Type
            </label>
            <select
              id="documentType"
              className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
              value={documentType}
              onChange={handleTypeChange}
            >
              <option value="" disabled>
                Select document type
              </option>
              <option value="report">National ID</option>
              <option value="invoice">Passport</option>
              <option value="contract">Other</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
