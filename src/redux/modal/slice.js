import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
  selectedCar: {},
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpenModal = true;
      state.selectedCar = action.payload;
    },
    closeModal() {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export const modalReducer = modal.reducer;
