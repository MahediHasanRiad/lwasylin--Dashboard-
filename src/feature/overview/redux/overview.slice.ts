import { createSlice } from "@reduxjs/toolkit";
import { overviewAsyncThunk } from "./overview.thunk";

interface initialStateType {
  data: {
    activeCommunities: number;
    totalProperties: number;
    openWorkOrders: number;
    monthlyRevenue: number;
  } | null;
  isLoading: boolean;
  isError: any;
}

const initialState: initialStateType = {
  data: null,
  isLoading: false,
  isError: null,
};

export const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(overviewAsyncThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(overviewAsyncThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(overviewAsyncThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const {} = overviewSlice.actions;
export default overviewSlice.reducer;
