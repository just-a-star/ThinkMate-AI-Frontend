import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";
import chatReducer from "./chatSlice";
import pengajarReducer from "./pengajarSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const rootReducer = combineReducers({
  quiz: quizReducer,
  chat: chatReducer,
  pengajar: pengajarReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pengajar"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedQuizReducer = persistReducer(persistConfig, quizReducer);
// const persistedPengajarReducer = persistReducer(persistConfig, pengajarReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
