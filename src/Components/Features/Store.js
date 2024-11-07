import { configureStore } from "@reduxjs/toolkit";
import darkModereducer from "../Features/theme/ThemeSlice"
import cartreducer from "../Features/Cart/CartSlice"

const Store = configureStore({
  reducer: {
    darkMode : darkModereducer,
    cart:cartreducer
  },
});

export default Store;
