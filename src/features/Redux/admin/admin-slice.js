import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API = import.meta.env.VITE_API_URL;

export const adminFetchAllUsers = createAsyncThunk(
  "user/adminFetchAllUsers",
  async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You are not authorized to view this page");
    }
    const response = await fetch(`${API}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Fetching users failed due to an unknown error"
      );
    }

    const data = await response.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    hasErrors: false,
    users: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(adminFetchAllUsers.pending, (state, action) => {
        state.loading = true;
        state.users = [];
        state.hasErrors = false;
      })
      .addCase(adminFetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.hasErrors = false;
      })
      .addCase(adminFetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.hasErrors = true;
      });
  },
});

export default usersSlice.reducer;
