import { createSlice } from "@reduxjs/toolkit";

const CacheSearch = () => createSlice({
    name: "cache",
    initialState: {},
    reducers: {
        CacheStore: (state, action) => {
            state = Object.assign(state, action);
        }
    }
})

export const { cache } = CacheSearch.actions;
export default CacheSearch.reducers;