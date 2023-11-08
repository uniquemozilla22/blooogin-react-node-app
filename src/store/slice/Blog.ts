import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
};

export const blogAPI = createAsyncThunk("blog/fetch", async () => {
  const response = await fetch("http://localhost:8080/blog");
  return await response.json();
});


const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(blogAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(blogAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(blogAPI.rejected, (state) => {
      state.isLoading = false;
      state.data = [];
    });
  },
});

export default blogSlice;
