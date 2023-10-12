import { createSlice } from '@reduxjs/toolkit'

const CacheSlice = createSlice({
    name: "cache",
    initialState: {
        
    },
    reducers: {
        CacheStore: (state , action) => {
            state = Object.assign(state, action.payload);
        }
    }
}) 

export const { CacheStore } = CacheSlice.actions;
export default CacheSlice.reducer;