import { createSlice } from "@reduxjs/toolkit";

interface OpenCloseNavState {
  isOpen: boolean;
}

const initialState: OpenCloseNavState = {
  isOpen: true,
};

export const openCloseNavSlice = createSlice({
  name: "openCloseNav",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNav, closeNav } = openCloseNavSlice.actions;

export default openCloseNavSlice.reducer;
