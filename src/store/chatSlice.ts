import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  type: "bot" | "user";
  message?: string;
  audioSrc?: string;
  placeholder?: string;
}

export interface Chat {
  message: string;
  audioSrc: string;
  placeholder: string;
  type: string;
  role: string;
  id: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  conversation_id: number;
}

interface ChatState {
  messages: Chat[];
  users: any[]; // Define a more specific type if possible
}
const initialState: ChatState = {
  messages: [],
  users: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Chat[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Chat>) => {
      state.messages.push(action.payload);
    },
    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },
    resetChatState: () => initialState,
  },
});

export const { setMessages, setUsers, resetChatState, addMessage } = chatSlice.actions;
export type RootState = ReturnType<typeof chatSlice.reducer>;

export default chatSlice.reducer;
