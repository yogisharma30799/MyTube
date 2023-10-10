import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        isToggleMenu : true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isToggleMenu = !state.isToggleMenu
        },
        closeMenu: (state) => {
            state.isToggleMenu = false
        }
    }
})

export const { toggleMenu, closeMenu } = AppSlice.actions;
export default AppSlice.reducer;