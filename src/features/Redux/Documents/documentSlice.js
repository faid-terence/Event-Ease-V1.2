import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Thunk for uploading a document
export const uploadDocument = createAsyncThunk(
  "documentUpload/uploadDocument",
  async (documentDetails, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        "http://localhost:3000/user/upload-verification-doc",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Ensure the content type is set
          },
          body: JSON.stringify(documentDetails), // Stringify the document details
        }
      );

      console.log("Response", response);

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message); // Use rejectWithValue for better error handling
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const adminApproveDocument = createAsyncThunk(
  "documentUpload/adminApproveDocument",
  async (documentDetails, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch(
        "http://localhost:3000/user/approve-verification-doc",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(documentDetails),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice for handling document upload state
const documentUploadSlice = createSlice({
  name: "documentUpload",
  initialState: {
    loading: false,
    hasErrors: false,
    document: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, { payload }) => {
        state.document = payload;
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(uploadDocument.rejected, (state, { payload }) => {
        state.loading = false;
        state.hasErrors = true;
        toast.error(payload || "Document upload failed"); // Show toast for errors
      });

    builder
      .addCase(adminApproveDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(adminApproveDocument.fulfilled, (state, { payload }) => {
        state.document = payload;
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(adminApproveDocument.rejected, (state, { payload }) => {
        state.loading = false;
        state.hasErrors = true;
        toast.error(payload || "Document approval failed");
      });
  },
});

export default documentUploadSlice.reducer;
