import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getAllPayments = createAsyncThunk(
  "payment/getAllPayments",
  async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Not Authorized");
    }
    const response = await fetch("http://localhost:3000/stripe/payments", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    payment: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllPayments.pending, (state, action) => {
        state.loading = true;
        state.payment = [];
        state.error = null;
      })
      .addCase(getAllPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.payment = action.payload;
      })
      .addCase(getAllPayments.rejected, (state, action) => {
        state.loading = false;
        state.payment = [];
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;
