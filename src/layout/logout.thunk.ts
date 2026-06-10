import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logoutThunk = createAsyncThunk('auth/logout', async(_, {rejectWithValue}) => {
    try {
        // const response = await axios.    
    } 
    catch (error: unknown) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data || error.message)
        }
        return rejectWithValue('Error during Logout !!!')
    }
})