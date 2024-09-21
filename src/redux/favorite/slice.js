import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favorites = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const favoriteReducer = favorites.reducer;
export const { addToFavorite, deleteFavorite } = favorites.actions;
