import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

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
