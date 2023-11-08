import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./slice/Loading";
import blogSlice from "./slice/Blog";

const store = configureStore({
  reducer: {
    [LoadingSlice.name]: LoadingSlice.reducer,
    [blogSlice.name]: blogSlice.reducer,
  },
});

export default store;
