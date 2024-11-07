import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk to fetch the cart data from the API
export const getCart = createAsyncThunk("FETCH/CART", async () => {
  const response = await axios.get("https://paratha-store.onrender.com/data");
  console.log(response.data);
  return response.data; // This will return only the actual data from the response
});

// Define the Cart slice
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    isError: false,
    allcart: [{ id: 1, title: "paratha" }],
    name: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allcart = action.payload; // Set the fetched data to allcart
      })
      .addCase(getCart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default CartSlice.reducer;
