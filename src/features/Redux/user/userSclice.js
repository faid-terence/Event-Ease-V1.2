import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userCredentials) => {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Registration failed due to an unknown error"
      );
    }

    const data = await response.json();
    return data;
  }
);

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
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Login failed due to an unknown error"
      );
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
  }
);

export const resetUserPassword = createAsyncThunk(
  "user/resetUserPassword",
  async (userCredentials) => {
    const response = await fetch("http://localhost:3000/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "Password reset failed due to an unknown error"
      );
    }

    const data = await response.json();
    return data;
  }
);

export const setNewPassword = createAsyncThunk(
  "user/setNewPassword",
  async (userCredentials) => {
    const resetToken = window.location.pathname.split("/")[3];
    const response = await fetch(
      `http://localhost:3000/auth/reset-password/${resetToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message);
      throw new Error(
        errorData.message || "Password reset failed due to an unknown error"
      );
    }

    const data = await response.json();
    return data;
  }
);

export const verifyEmail = createAsyncThunk("user/verifyEmail", async () => {
  const token = window.location.pathname.split("/")[3];
  const response = await fetch(`http://localhost:3000/auth/verify/${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || "Email verification failed due to an unknown error"
    );
  }

  const data = await response.json();
  return data;
});

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

    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.user = null;
        state.hasErrors = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.hasErrors = true;
        state.errorMessage = action.error.message;
        toast.error(action.error.message);
      });

    builder
      .addCase(resetUserPassword.pending, (state, action) => {
        state.loading = true;
        state.user = null;
        state.hasErrors = false;
      })
      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.user = action.payload;
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.hasErrors = true;
        state.errorMessage = action.error.message;
        toast.error(action.error.message);
      });

    builder
      .addCase(setNewPassword.pending, (state, action) => {
        state.loading = true;
        state.user = null;
        state.hasErrors = false;
      })
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.user = action.payload;
      })
      .addCase(setNewPassword.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.hasErrors = true;
        state.errorMessage = action.error.message;
        toast.error(action.error.message);
      });

    builder

      .addCase(verifyEmail.pending, (state, action) => {
        state.loading = true;
        state.user = null;
        state.hasErrors = false;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.hasErrors = false;
        state.user = action.payload;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.hasErrors = true;
        state.errorMessage = action.error.message;
        toast.error(action.error.message);
      });
  },
});

export default userSlice.reducer;
