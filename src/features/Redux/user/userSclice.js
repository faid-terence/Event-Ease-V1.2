import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      throw new Error("Network response was not ok");
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
        if (action.error.message === "Network response was not ok") {
          state.hasErrors = true;
        }
        else {
          state.hasErrors = false;
        }
      });
  },
});

export default userSlice.reducer;
