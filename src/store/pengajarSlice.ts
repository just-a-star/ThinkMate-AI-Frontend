import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Pengajar {
    id: string;
    name: string;
    username: string;
    email: string;
    exp: number;

}

const initialState: Pengajar = {
    id: "",
    name: "",
    username: "",
    email: "",
    exp: 0,
};

export const pengajarSlice = createSlice({
    name: "pengajar",
    initialState,
    reducers: {
        setPengajar: (state, action: PayloadAction<Pengajar>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.exp = action.payload.exp;
        },
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        resetPengajarState: () => initialState,
    },
});

export const { setPengajar, setId, resetPengajarState } = pengajarSlice.actions;   

export type RootState = ReturnType<typeof pengajarSlice.reducer>;

export default pengajarSlice.reducer;

