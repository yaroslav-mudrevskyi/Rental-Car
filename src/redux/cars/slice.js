import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { fetchCars, loadMoreCars } from "./operations";
import { handleFulfilled, handlePending, handleRejected } from "../handlers";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
  isLastPage: false,
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        if (action.payload.length < axios.defaults.params.limit) {
          state.isLastPage = true;
        } else {
          state.isLastPage = false;
        }
      })
      .addMatcher(({ type }) => type.endsWith("pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("fulfilled"), handleFulfilled)
      .addMatcher(({ type }) => type.endsWith("rejected"), handleRejected);
  },
});

export const carsReducer = slice.reducer;
