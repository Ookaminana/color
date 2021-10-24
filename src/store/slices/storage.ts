import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import {} from '../../types'

import { RootState } from '../index'


export const initialState = {
   
    // outlets: [] as Array<OutletType>,
}


export const loadCups = createAsyncThunk('storage/loadCups', async () => {
    // const cups = await CupsService.getCups()
    // return cups
})



export const storageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // builder.addCase(loadBrands.fulfilled, (state, action) => {
        //     state.brands = action.payload
        // })

    },
})

// export const selectBrands = (state: RootState) => state.storage.brands


export default storageSlice.reducer
