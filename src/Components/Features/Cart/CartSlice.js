// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define the async thunk to fetch the cart data from the API
// export const getCart = createAsyncThunk("FETCH/CART", async () => {
//   const response = await axios.get("https://paratha-store.onrender.com/data");
//   console.log(response.data);
//   return response.data; // This will return only the actual data from the response
// });

// // Define the Cart slice
// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     isLoading: false,
//     isError: false,
//     allcart: [{ id: 1, title: "paratha" }],
//     name: [],
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getCart.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(getCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.allcart = action.payload; // Set the fetched data to allcart
//       })
//       .addCase(getCart.rejected, (state) => {
//         state.isLoading = false;
//         state.isError = true;
//       });
//   },
// });

// export default CartSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch the cart data from the API
export const getCart = createAsyncThunk("cart/getCart", async () => {
  const response = await axios.get("https://paratha-store.onrender.com/data");
  return response.data; // Returns only the data portion of the response
});

// Define the Cart slice
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    isError: false,
    allcart: [],
  },
  reducers: {
    // Action to update quantity
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.allcart.find((item) => item.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + amount); // Ensures quantity does not go below 1
      }
    },
    // Action to toggle extra sauce
    toggleExtraSauce: (state, action) => {
      const item = state.allcart.find((item) => item.id === action.payload);
      if (item) {
        item.extraSauce = !item.extraSauce;
      }
    },
    // Action to remove item from the cart
    removeItem: (state, action) => {
      state.allcart = state.allcart.filter((item) => item.id !== action.payload);
    },
  },
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

export const { updateQuantity, toggleExtraSauce, removeItem } = CartSlice.actions;
export default CartSlice.reducer;

