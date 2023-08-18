import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import openCloseNavReducer from "../Redux/features/openCloseNavSlice";

import boardSlice from "./features/boardsSlice";

export const store = configureStore({
  reducer: {
    openCloseNav: openCloseNavReducer,
    boards: boardSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
