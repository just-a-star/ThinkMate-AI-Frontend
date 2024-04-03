import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    users: [],
   
    };

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<any>) => {
        state.messages = action.payload;
        },
        setUsers: (state, action: PayloadAction<any>) => {
          state.users = action.payload;
        },
        resetChatState: () => {
        return initialState;
        },
    },
    });

export const { setMessages, setUsers, resetChatState } = chatSlice.actions;
export type RootState = ReturnType<typeof chatSlice.reducer>;

export default chatSlice.reducer;