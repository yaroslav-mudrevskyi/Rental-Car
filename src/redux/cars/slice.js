import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, loadMoreCars } from "./operations";
import axios from "axios";

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
        state.isLoading = false;
      })
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.isLoading = false;
        if (action.payload.length < axios.defaults.params.limit) {
          state.isLastPage = true;
        } else {
          state.isLastPage = false;
        }
      })
      .addCase(loadMoreCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loadMoreCars.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const carsReducer = slice.reducer;
