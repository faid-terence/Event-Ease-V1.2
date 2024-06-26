import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchUserOrders = createAsyncThunk(
  "order/fetchUserOrders",
  async (userId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/order`, {
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

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (order, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/order/${order.ticket}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
    if (response.status === 400) {
      toast.error("Insufficient quantity of tickets available");
    }
    const data = await response.json();
    return data;
  }
);

export const payOrder = createAsyncThunk(
  "order/payOrder",
  async (orderId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/order/${orderId}/pay`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  }
);

export const updateOrderPaymentStatus = createAsyncThunk(
  "order/updateOrderPaymentStatus",
  async (orderId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/order/${orderId}/payment/status`, {
      method: "PUT",
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

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    hasError: false,
    orders: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(payOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(payOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(payOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
