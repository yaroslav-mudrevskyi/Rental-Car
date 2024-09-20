import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenModal: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpenModal = true;
    },
    closeModal() {
      return initialState;
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export const modalReducer = modal.reducer;
