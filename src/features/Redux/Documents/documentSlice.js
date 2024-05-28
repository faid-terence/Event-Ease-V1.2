import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
export const uploadDocument = createAsyncThunk(
  "documentUpload/uploadDocument",
  async (document, { rejectWithValue }) => {
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
          },
          body: document,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
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
      });
  },
});


export default documentUploadSlice.reducer;