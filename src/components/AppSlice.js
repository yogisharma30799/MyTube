import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        isToggleMenu : true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isToggleMenu = !state.isToggleMenu
        }
    }
})

export const { toggleMenu } = AppSlice.actions;
export default AppSlice.reducer;