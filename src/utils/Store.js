import AppSlice from "../components/AppSlice";
import { configureStore } from "@reduxjs/toolkit";
import CacheSlice from "./CacheSlice";


const Store = configureStore({
    reducer: {
        app: AppSlice,
        cache: CacheSlice
    }
})

export default Store;