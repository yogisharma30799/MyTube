import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Contants";

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessages: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.unshift(action.payload)
        }
    }
});


export const { addMessages } = ChatSlice.actions;
export default ChatSlice.reducer;