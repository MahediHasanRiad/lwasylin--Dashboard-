import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adminDataThunk = createAsyncThunk(
  "auth/admin",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access-token");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data
    } 
    catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data || error.message);
      }
      return rejectWithValue("Error during fetch admin info");
    }
  },
);
