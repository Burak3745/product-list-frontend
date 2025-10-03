import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

// async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const res = await api.get(`/products?${params}`);
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
