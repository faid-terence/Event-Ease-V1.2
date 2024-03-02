import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
      throw new Error(
        "Invalid email or password. Please check your credentials and try again."
      );
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    hasErrors: false,
    user: null,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.user = null;
        state.hasErrors = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.hasErrors = true;
        state.errorMessage = action.error.message;
        toast.error(action.error.message);
      });
  },
});

export default userSlice.reducer;
