import { createSlice } from "@reduxjs/toolkit";

export const fetchUserOrders = createAsyncThunk(
  "order/fetchUserOrders",
  async (userId, { rejectWithValue }) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/orders`, {
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
    orders: [],
    status: "idle",
    error: null,
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
  },
});


export default orderSlice.reducer;
