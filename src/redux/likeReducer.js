import { createSlice } from "@reduxjs/toolkit";

// const id = { number };

const initialState = {
  1: true,
  2: true,
  3: false,
};

export const likeSlice = createSlice({
  name: "like",
  initialState: initialState,
  reducers: {
    addLike: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    removeLike: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
});

export const { addLike, removeLike } = likeSlice.actions;

export default likeSlice.reducer;
