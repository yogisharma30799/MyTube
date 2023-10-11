import AppSlice from "../components/AppSlice";
import { configureStore } from "@reduxjs/toolkit";
import CacheSearch from "./CacheSearch";


const Store = configureStore({
    reducer: {
        app: AppSlice,     
        cache: CacheSearch
    }
})

export default Store;