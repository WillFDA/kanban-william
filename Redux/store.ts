import { configureStore } from "@reduxjs/toolkit";
import openCloseNavReducer from "../Redux/features/openCloseNavSlice";

export const store = configureStore({
  reducer: {
    openCloseNav: openCloseNavReducer,
  },
});
