import React, { useState, useEffect } from "react";
import uploadImageToCloudinary from "../../utilities/uploadCloudinary";
import { useDispatch } from "react-redux";
import { uploadDocument } from "../../features/Redux/Documents/documentSlice";
import { toast } from "react-toastify";

const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return { userEmail: decodedToken.email };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};

const DocumentUploadForm = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      toast.error("Please select a file.");
      return;
    }
    setLoading(true);
    try {
      const data = await uploadImageToCloudinary(selectedFile);
      setFile(data.url);
      toast.success("File uploaded successfully.");
    } catch (error) {
      console.error("File upload failed", error);
      toast.error("File upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      toast.error("Please upload a file.");
      return;
    }
    if (!user) {
      toast.error("Please log in.");
      return;
    }
    setLoading(true);
    const documentDetails = {
      email: user.userEmail,
      verificationDoc: file, // file contains the Cloudinary uploaded URL
    };
    try {
      const result = await dispatch(uploadDocument(documentDetails)).unwrap();
      console.log("Document upload result", result);
      if (result) {
        toast.success("Document uploaded successfully");
        // Reset the form
        setFile(null);
      } else {
        toast.error("Document upload failed");
      }
    } catch (error) {
      console.error("Document upload failed", error);
      toast.error("Document upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
              disabled={loading}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentUploadForm;
