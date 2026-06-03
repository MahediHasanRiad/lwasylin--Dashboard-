import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    isLoading: false,
    isError: null
}

export const overviewSlice = createSlice({
    name: 'overview',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase()
    }
})


export const {} = overviewSlice.actions
export default overviewSlice.reducer