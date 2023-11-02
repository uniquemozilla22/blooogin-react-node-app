import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
  name: "LOADING",
  initialState: {
    status: false,
  },
  reducers: {
    onLoading(state) {
      state.status = true;
    },
    onNotLoading(state) {
      state.status = false;
    },
  },
});

export default LoadingSlice;

export const { onLoading, onNotLoading } = LoadingSlice.actions;
