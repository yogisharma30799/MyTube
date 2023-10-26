import AppSlice from "../components/AppSlice";
import { configureStore } from "@reduxjs/toolkit";
import CacheSlice from "./CacheSlice";
import ChatSlice from "./ChatSlice";


const Store = configureStore({
    reducer: {
        app: AppSlice,
        cache: CacheSlice,
        chat : ChatSlice,
    }
})

export default Store;