import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./login.thunk";
<<<<<<< HEAD
import { adminDataThunk } from "./admin.thunk";
=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1

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
<<<<<<< HEAD

    // admin data
    builder
      .addCase(adminDataThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(adminDataThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(adminDataThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
