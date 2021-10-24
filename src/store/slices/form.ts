import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const initialState = {
   
    // outlets: [] as Array<OutletType>,
}

export const paletteSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // builder.addCase(loadBrands.fulfilled, (state, action) => {
        //     state.brands = action.payload
        // })

    },
})


export default paletteSlice.reducer