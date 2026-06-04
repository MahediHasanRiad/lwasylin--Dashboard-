import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const overviewAsyncThunk = createAsyncThunk('overview/showAll', async(_, {rejectWithValue}) => {
    try {
        const token = localStorage.getItem('access-token')
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/stats`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data.data 
    } 
    catch (error: unknown) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data || error.message)
        }
        return rejectWithValue('Error during fetch overview data')
    }
})