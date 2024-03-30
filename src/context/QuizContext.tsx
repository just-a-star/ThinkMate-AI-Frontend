import { createContext, useContext, useState } from "react";
// import quiz types
import { ReactNode } from "react";
import { Quiz } from "../app/types/quiz";

const QuizContext = createContext<any>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [quizData, setQuizData] = useState({ pin: "", id: null, topic: "", nama: "" });

  return <QuizContext.Provider value={{ quizData, setQuizData }}>{children}</QuizContext.Provider>;
};
