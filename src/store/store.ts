import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';
import chatReducer from './chatSlice';

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        chat: chatReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;