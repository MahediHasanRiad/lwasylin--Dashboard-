import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface loginThunkDataType {
    email: string;
    password: string;
}

export const loginThunk = createAsyncThunk('auth/login', async(loginData: loginThunkDataType, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, loginData)
        return response.data.data
    } 
    catch (error: unknown) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data || error.message)
        }
        return rejectWithValue('Error during Login')
    }
})