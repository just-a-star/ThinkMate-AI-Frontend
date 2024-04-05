import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  nomor_absen: "",
  name: "",
  username: "",
  quizDetails: { pin: "", id: null, topic: "" },
  showDialog: false,
  started: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setNomorAbsen: (state, action: PayloadAction<string>) => {
      state.nomor_absen = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setQuizDetails: (state, action) => {
      state.quizDetails = action.payload;
    },
    setShowDialog: (state, action) => {
      state.showDialog = action.payload;
    },
    setStarted: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    resetQuizState: () => {
      return initialState;
    },
  },
});

export const { setNomorAbsen, setName, setUsername, setQuizDetails, setShowDialog, resetQuizState, setStarted } = quizSlice.actions;

export type RootState = ReturnType<typeof quizSlice.reducer>;

export default quizSlice.reducer;
