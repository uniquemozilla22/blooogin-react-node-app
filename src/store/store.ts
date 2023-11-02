import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./slice/Loading";

const store = configureStore({
  reducer: {
    [LoadingSlice.name]: LoadingSlice.reducer,
  },
});

export default store;
