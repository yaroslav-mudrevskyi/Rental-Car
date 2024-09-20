import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice";
import { modalReducer } from "./modal/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    modal: modalReducer,
  },
});
