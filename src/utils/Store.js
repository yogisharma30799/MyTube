import AppSlice from "../components/AppSlice";
import { configureStore } from "@reduxjs/toolkit";


const Store = configureStore({
    reducer: {
    app : AppSlice
}
})

export default Store;