import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./login.thunk";

interface initialStateType {
  data: any;
  isLoading: boolean;
  isError: any;
}

const initialState: initialStateType = {
  data: null,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isError = null;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
